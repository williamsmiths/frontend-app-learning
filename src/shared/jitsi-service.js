// Service để tạo Jitsi token sử dụng Duy Tan Universe API
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { JITSI_CONFIG, logJitsiConfig } from './jitsi-config';

// Helper function để sanitize room name
export const sanitizeRoomName = (courseId) => {
  // Thay thế dấu hai chấm và các ký tự đặc biệt bằng dấu gạch ngang
  return courseId
    .replace(/:/g, '-')        // Thay dấu hai chấm bằng gạch ngang
    .replace(/\+/g, '-')       // Thay dấu cộng bằng gạch ngang
    .replace(/\s+/g, '-')      // Thay khoảng trắng bằng gạch ngang
    .replace(/[^a-zA-Z0-9-_]/g, '-') // Thay các ký tự đặc biệt khác bằng gạch ngang
    .replace(/-+/g, '-')       // Thay nhiều gạch ngang liên tiếp bằng một gạch ngang
    .toLowerCase();            // Chuyển về chữ thường
};

// Helper function để lấy thông tin từ JWT cookie
export const getUserInfoFromJWT = () => {
  try {
    // Lấy JWT token từ cookie
    const jwtCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('edx-jwt-cookie-header-payload='));

    if (jwtCookie) {
      const jwtToken = jwtCookie.split('=')[1];

      if (jwtToken) {
        // Decode JWT token (chỉ decode payload, không verify signature)
        const payload = JSON.parse(atob(jwtToken.split('.')[1]));

        return {
          userId: payload.user_id?.toString() || payload.sub || 'anonymous',
          userName: payload.name || payload.preferred_username || 'Student',
          email: payload.email || '',
          username: payload.preferred_username || 'anonymous',
          isAdmin: payload.administrator || false,
          isSuperuser: payload.superuser || false,
          scopes: payload.scopes || [],
          emailVerified: payload.email_verified || false
        };
      }
    }

    // Fallback: sử dụng getAuthenticatedUser nếu không có JWT cookie
    return getUserInfoFromAuth();

  } catch (error) {
    console.error('Error parsing JWT cookie:', error);
    return getUserInfoFromAuth();
  }
};

// Fallback function để lấy thông tin từ authenticated user
export const getUserInfoFromAuth = () => {
  try {
    const user = getAuthenticatedUser();

    if (user) {
      return {
        userId: user.userId?.toString() || user.user_id?.toString() || 'anonymous',
        userName: user.name || user.username || 'Student',
        email: user.email || '',
        username: user.username || 'anonymous',
        isAdmin: user.administrator || false,
        isSuperuser: user.is_superuser || false,
        scopes: [],
        emailVerified: false
      };
    }

    return {
      userId: 'anonymous',
      userName: 'Student',
      email: '',
      username: 'anonymous',
      isAdmin: false,
      isSuperuser: false,
      scopes: [],
      emailVerified: false
    };
  } catch (error) {
    console.error('Error getting authenticated user:', error);
    return {
      userId: 'anonymous',
      userName: 'Student',
      email: '',
      username: 'anonymous',
      isAdmin: false,
      isSuperuser: false,
      scopes: [],
      emailVerified: false
    };
  }
};

// Main function để tạo Jitsi token
export const createJitsiToken = async (courseInfo, userInfo) => {
  try {
    console.log('=== CREATING JITSI TOKEN ===');
    console.log('Course info:', courseInfo);
    console.log('User info:', userInfo);

    // Log cấu hình khi khởi tạo
    logJitsiConfig();

    // Sanitize room name để tránh lỗi với dấu hai chấm
    const sanitizedRoomName = sanitizeRoomName(courseInfo.courseId);
    console.log('Original course ID:', courseInfo.courseId);
    console.log('Sanitized room name:', sanitizedRoomName);

    // Tạo timestamps theo format mới
    const now = new Date();
    const expTime = new Date(now.getTime() + JITSI_CONFIG.JWT_CONFIG.tokenLifetime);

    // Format timestamps theo ISO 8601 với timezone
    const nbfTime = now.toISOString().replace('Z', '+00:00');
    const expTime_formatted = expTime.toISOString().replace('Z', '+00:00');

    const tokenPayload = {
      alg: JITSI_CONFIG.JWT_CONFIG.algorithm,
      secret: JITSI_CONFIG.JWT_CONFIG.secret,
      aud: JITSI_CONFIG.JWT_CONFIG.audience,
      room: "*", // Sử dụng wildcard như trong example
      nbf: nbfTime,
      exp: expTime_formatted,
      cntx_user_id: userInfo.userId || JITSI_CONFIG.FALLBACK_CONFIG.userId,
      cntx_user_name: userInfo.userName || JITSI_CONFIG.FALLBACK_CONFIG.userName
    };

    console.log('🚀 Duy Tan API URL:', JITSI_CONFIG.JITOK_API_URL);
    console.log('📦 Payload (secret hidden):', {
      ...tokenPayload,
      secret: '[HIDDEN]'
    });

    console.log('📡 Making API request to Duy Tan Universe...');

    const response = await fetch(JITSI_CONFIG.JITOK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenPayload),
    });

    console.log('📨 Response status:', response.status);
    console.log('📨 Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
    }

    // Duy Tan API trả về JWT token trực tiếp (text/plain)
    const jwtToken = await response.text();
    console.log('📥 JWT Token từ Duy Tan API:', jwtToken);

    // Kiểm tra xem có phải JWT token hợp lệ không
    if (jwtToken && jwtToken.includes('.') && jwtToken.split('.').length === 3) {
      console.log('🎉 JWT Token hợp lệ! Length:', jwtToken.length);
      console.log('=== CREATING JITSI TOKEN - SUCCESS ===');
      return jwtToken.trim(); // Chỉ trim whitespace, không làm gì khác
    } else {
      console.error('❌ Invalid JWT token format:', jwtToken);
      throw new Error('Invalid JWT token format from API');
    }

  } catch (error) {
    console.error('💥 Error creating Jitsi token:', error);
    console.error('💥 Error message:', error.message);
    console.log('=== CREATING JITSI TOKEN - ERROR ===');

    // Return null on error để fallback
    return null;
  }
};// Helper function để tạo URL meet.jit.si với token
export const createJitsiMeetingUrl = (courseId, token) => {
  // Sanitize room name trước khi tạo URL
  const sanitizedRoomName = sanitizeRoomName(courseId);
  const roomName = `${JITSI_CONFIG.JITSI_MEET_CONFIG.roomPrefix}${sanitizedRoomName}`;
  const baseUrl = JITSI_CONFIG.JITSI_MEET_CONFIG.baseUrl;

  console.log('Creating meeting URL with sanitized room:', roomName);

  if (token) {
    // Clean token - ensure no quotes or extra characters
    let cleanToken = token;
    if (typeof cleanToken === 'string') {
      cleanToken = cleanToken.replace(/^["']|["']$/g, ''); // Remove quotes
      cleanToken = cleanToken.trim(); // Remove whitespace
    }

    console.log('🔐 Creating meeting URL with JWT token');
    console.log('🔍 Token to use:', cleanToken);

    // Use ? for query parameter, not #
    const meetingUrl = `${baseUrl}/${roomName}?jwt=${cleanToken}`;
    console.log('🔗 Generated meeting URL:', meetingUrl);

    return meetingUrl;
  } else {
    // Fallback: meeting không có token
    console.log('🏠 Creating tokenless meeting URL');
    const fallbackUrl = `${baseUrl}/${roomName}`;
    console.log('🔗 Generated fallback URL:', fallbackUrl);

    return fallbackUrl;
  }
};

// Main function để lấy thông tin user (sử dụng JWT cookie trước)
export const getUserInfo = () => {
  return getUserInfoFromJWT();
};
