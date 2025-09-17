// Test file cho Jitsi integration
import {
  createJitsiToken,
  getUserInfo,
  createJitsiMeetingUrl,
  sanitizeRoomName,
  testRoomNameSanitization,
  getUserInfoFromJWT,
  testJitokAPI
} from './jitsi-service';
import { JITSI_CONFIG } from './jitsi-config';

import { JITSI_CONFIG } from '../shared/jitsi-config';

// Mock data cho testing
const mockCourseInfo = {
  courseId: 'course-v1:TestOrg+CS101+2024',
  title: 'Introduction to Computer Science',
  org: 'TestOrg'
};

const mockUserInfo = {
  userId: 'test-user-123',
  userName: 'Test Student',
  email: 'test@example.com',
  username: 'teststudent',
  isAdmin: false,
  isSuperuser: false,
  emailVerified: true
};

// Test function để verify service hoạt động
export const testJitsiIntegration = async () => {
  console.log('=== TESTING JITSI INTEGRATION ===');

  try {
    // Test 1: Verify config
    console.log('1. Testing configuration...');
    console.log('Config loaded:', JITSI_CONFIG);

    // Test 2: Test room name sanitization
    console.log('2. Testing room name sanitization...');
    testRoomNameSanitization();

    // Test 3: Test specific course ID sanitization
    const originalCourseId = 'course-v1:OpenedX+DemoX+DemoCourse';
    const sanitizedRoomName = sanitizeRoomName(originalCourseId);
    console.log('3. Course ID sanitization:');
    console.log(`Original: ${originalCourseId}`);
    console.log(`Sanitized: ${sanitizedRoomName}`);
    console.log(`Expected: course-v1-openedx-demox-democourse`);

    // Test 4: Test JWT cookie parsing
    console.log('4. Testing JWT cookie parsing...');
    const jwtUserInfo = getUserInfoFromJWT();
    console.log('JWT User info:', jwtUserInfo);

    // Test 5: Test getUserInfo (fallback chain)
    console.log('5. Testing getUserInfo...');
    const userInfo = getUserInfo();
    console.log('User info:', userInfo);

    // Test 6: Test URL creation without token
    console.log('6. Testing URL creation without token...');
    const urlWithoutToken = createJitsiMeetingUrl(mockCourseInfo.courseId, null);
    console.log('URL without token:', urlWithoutToken);

    // Test 7: Test URL creation with mock token
    console.log('7. Testing URL creation with mock token...');
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.token';
    const urlWithToken = createJitsiMeetingUrl(mockCourseInfo.courseId, mockToken);
    console.log('URL with token:', urlWithToken);

    // Test 8: Test token creation (cần network connection)
    console.log('8. Testing token creation...');
    console.log('Note: This requires network connection to jitok.emrah.com');
    const token = await createJitsiToken(mockCourseInfo, mockUserInfo);
    console.log('Created token:', token ? 'SUCCESS' : 'FAILED');

    console.log('=== JITSI INTEGRATION TEST COMPLETED ===');
    return true;

  } catch (error) {
    console.error('Error in Jitsi integration test:', error);
    return false;
  }
};

// Helper để test JWT parsing với mock data
export const testJWTParsingWithMockData = () => {
  console.log('=== TESTING JWT PARSING WITH MOCK DATA ===');

  // Mock JWT payload tương tự như example bạn cung cấp
  const mockJWTPayload = {
    "aud": "openedx",
    "exp": 1758093524,
    "grant_type": "password",
    "iat": 1758089924,
    "iss": "http://local.openedx.io/oauth2",
    "preferred_username": "admin",
    "scopes": ["user_id", "email", "profile"],
    "version": "1.2.0",
    "sub": "c208e8c9721e82d2fa968fffbf49de8a",
    "filters": ["user:me"],
    "is_restricted": false,
    "email_verified": true,
    "user_id": 4,
    "email": "admin@email.com",
    "name": "",
    "family_name": "",
    "given_name": "",
    "administrator": true,
    "superuser": true
  };

  // Simulate processing this payload
  const processedUserInfo = {
    userId: mockJWTPayload.user_id?.toString() || mockJWTPayload.sub || 'anonymous',
    userName: mockJWTPayload.name || mockJWTPayload.preferred_username || 'Student',
    email: mockJWTPayload.email || '',
    username: mockJWTPayload.preferred_username || 'anonymous',
    isAdmin: mockJWTPayload.administrator || false,
    isSuperuser: mockJWTPayload.superuser || false,
    scopes: mockJWTPayload.scopes || [],
    emailVerified: mockJWTPayload.email_verified || false
  };

  console.log('Mock JWT Payload:', mockJWTPayload);
  console.log('Processed User Info:', processedUserInfo);
  console.log('============================================');

  return processedUserInfo;
};

// Helper để run test trong browser console
if (typeof window !== 'undefined') {
  window.testJitsiIntegration = testJitsiIntegration;
  window.testJWTParsingWithMockData = testJWTParsingWithMockData;
  window.testRoomNameSanitization = testRoomNameSanitization;
  console.log('Jitsi integration tests available:');
  console.log('- window.testJitsiIntegration()');
  console.log('- window.testJWTParsingWithMockData()');
  console.log('- window.testRoomNameSanitization()');
}