// Enhanced test script để test tất cả CORS bypass methods
// Copy paste vào browser console

console.log("🚀 Enhanced Jitsi CORS Bypass Test");

// Test data
const testCourseInfo = {
  courseId: 'course-v1:OpenedX+DemoX+DemoCourse',
  title: 'Demo Course',
  org: 'OpenedX'
};

const testUserInfo = {
  userId: 'test-user-123',
  userName: 'Test User',
  email: 'test@example.com',
  username: 'testuser',
  isAdmin: false,
  isSuperuser: false,
  emailVerified: true
};

// Test function
async function testAllMethods() {
  console.log("🧪 Testing all token creation methods...");

  // Method 1: Standard createJitsiToken (tries multiple approaches)
  console.log("\n📡 Method 1: Standard createJitsiToken");
  try {
    const token1 = await window.createJitsiToken(testCourseInfo, testUserInfo);
    console.log("✅ Standard method result:", token1);

    if (token1) {
      const url1 = window.createJitsiMeetingUrl(testCourseInfo.courseId, token1);
      console.log("🔗 Generated URL:", url1);
    }
  } catch (error) {
    console.error("❌ Standard method failed:", error);
  }

  // Method 2: Debug token creation
  console.log("\n🔧 Method 2: Debug token creation");
  try {
    const token2 = await window.debugTokenCreation();
    console.log("✅ Debug method result:", token2);
  } catch (error) {
    console.error("❌ Debug method failed:", error);
  }

  // Method 3: Direct API test
  console.log("\n🌐 Method 3: Direct API test");
  try {
    const apiResult = await window.testJitokAPI();
    console.log("✅ API test result:", apiResult);
  } catch (error) {
    console.error("❌ API test failed:", error);
  }

  // Method 4: Manual fetch with different headers
  console.log("\n🛠️ Method 4: Manual fetch test");
  try {
    const response = await fetch('https://jitok.emrah.com/api', {
      method: 'POST',
      mode: 'no-cors', // This might help
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        alg: 'HS256',
        secret: 'jitok-secret',
        aud: 'jitsi',
        room: 'test-room',
        nbf: new Date().toISOString(),
        exp: new Date(Date.now() + 3600000).toISOString(),
        cntx_user_id: 'test-user',
        cntx_user_name: 'Test User'
      })
    });
    console.log("✅ Manual fetch response:", response);
  } catch (error) {
    console.error("❌ Manual fetch failed:", error);
  }

  console.log("\n🏁 All tests completed!");
}

// Run test
testAllMethods();

// Helper functions
window.testAllMethods = testAllMethods;
window.testCourseInfo = testCourseInfo;
window.testUserInfo = testUserInfo;

console.log("💡 Available test functions:");
console.log("- testAllMethods() - Run all tests");
console.log("- window.testCourseInfo - Test course data");
console.log("- window.testUserInfo - Test user data");
