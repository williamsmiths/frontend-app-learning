// Service để tạo Jitsi token sử dụng API jitok.emrah.com
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

    const tokenPayload = {
      alg: JITSI_CONFIG.JWT_CONFIG.algorithm,
      secret: JITSI_CONFIG.JWT_CONFIG.secret,
      aud: JITSI_CONFIG.JWT_CONFIG.audience,
      room: `${JITSI_CONFIG.JITSI_MEET_CONFIG.roomPrefix}${sanitizedRoomName}`,
      nbf: new Date().toISOString(),
      exp: new Date(Date.now() + JITSI_CONFIG.JWT_CONFIG.tokenLifetime).toISOString(),
      cntx_user_id: userInfo.userId || JITSI_CONFIG.FALLBACK_CONFIG.userId,
      cntx_user_name: userInfo.userName || JITSI_CONFIG.FALLBACK_CONFIG.userName,
      cntx_user_email: userInfo.email || '',
      cntx_user_role: userInfo.isAdmin ? 'admin' : (userInfo.isSuperuser ? 'superuser' : 'student'),
      cntx_user_verified: userInfo.emailVerified || false
    };

    console.log('🚀 API URL:', JITSI_CONFIG.JITOK_API_URL);
    console.log('📦 Payload (secret hidden):', {
      ...tokenPayload,
      secret: '[HIDDEN]'
    });

    console.log('📡 Making API request to jitok...');

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

    const responseText = await response.text();
    console.log('📥 Raw response text:', responseText);

    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
      console.log('✅ Parsed response:', tokenData);
    } catch (parseError) {
      console.error('❌ JSON Parse Error:', parseError);
      console.error('Raw response that failed to parse:', responseText);
      throw new Error(`Failed to parse JSON response: ${parseError.message}`);
    }

    if (tokenData && tokenData.token) {
      console.log('🎉 Token created successfully! Length:', tokenData.token.length);
      console.log('=== CREATING JITSI TOKEN - SUCCESS ===');
      return tokenData.token;
    } else {
      console.error('❌ No token in response:', tokenData);
      throw new Error('No token found in API response');
    }

  } catch (error) {
    console.error('💥 Error creating Jitsi token:', error);
    console.error('💥 Error message:', error.message);
    console.log('=== CREATING JITSI TOKEN - ERROR ===');

    // Return null on error để fallback
    return null;
  }
};

// Helper function để tạo URL meet.jit.si với token
export const createJitsiMeetingUrl = (courseId, token) => {
  // Sanitize room name trước khi tạo URL
  const sanitizedRoomName = sanitizeRoomName(courseId);
  const roomName = `${JITSI_CONFIG.JITSI_MEET_CONFIG.roomPrefix}${sanitizedRoomName}`;
  const baseUrl = JITSI_CONFIG.JITSI_MEET_CONFIG.baseUrl;

  console.log('Creating meeting URL with sanitized room:', roomName);

  if (token) {
    // Use JWT token in URL parameter
    console.log('🔐 Creating meeting URL with JWT token');
    return `${baseUrl}/${roomName}?jwt=${token}`;
  } else {
    // Fallback: meeting không có token
    console.log('🏠 Creating tokenless meeting URL');
    return `${baseUrl}/${roomName}`;
  }
};

// Main function để lấy thông tin user (sử dụng JWT cookie trước)
export const getUserInfo = () => {
  return getUserInfoFromJWT();
};
