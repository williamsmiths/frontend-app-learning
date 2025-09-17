// Cấu hình cho Jitsi integration
export const JITSI_CONFIG = {
  // Cấu hình cho jitok API
  JITOK_API_URL: 'https://jitok.emrah.com/api',

  // Cấu hình JWT token
  JWT_CONFIG: {
    secret: process.env.JITSI_SECRET || "myappsecret", // Lấy từ environment variable
    audience: process.env.JITSI_APP_ID || "myappid", // Lấy từ environment variable
    algorithm: "HS256",
    tokenLifetime: 2 * 60 * 60 * 1000, // 2 giờ
  },

  // Cấu hình Jitsi Meet
  JITSI_MEET_CONFIG: {
    baseUrl: 'https://meet.jit.si',
    roomPrefix: 'course-'
  },

  // Cấu hình fallback
  FALLBACK_CONFIG: {
    userId: "anonymous",
    userName: "Student",
    useTokenAuth: true // Set false để disable token authentication
  }
};

// Helper để kiểm tra environment
export const isProductionEnvironment = () => {
  return process.env.NODE_ENV === 'production';
};

// Helper để log cấu hình (chỉ trong development)
export const logJitsiConfig = () => {
  if (!isProductionEnvironment()) {
    console.log('=== JITSI CONFIGURATION ===');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Jitok API URL:', JITSI_CONFIG.JITOK_API_URL);
    console.log('JWT Secret configured:', !!JITSI_CONFIG.JWT_CONFIG.secret);
    console.log('JWT Audience configured:', !!JITSI_CONFIG.JWT_CONFIG.audience);
    console.log('Token authentication enabled:', JITSI_CONFIG.FALLBACK_CONFIG.useTokenAuth);
    console.log('==========================');
  }
};
