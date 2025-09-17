// Test script cho Duy Tan Universe API
// Copy paste vào browser console để test

console.log("🚀 Testing Duy Tan Universe API");

// Test function
async function testDuyTanAPI() {
  console.log("🧪 Testing Duy Tan API directly...");

  try {
    // Test payload theo format mới
    const testPayload = {
      "alg": "HS256",
      "secret": "myappsecret",
      "aud": "myappid",
      "room": "*",
      "nbf": "2022-10-15T15:00+02:00",
      "exp": "2022-10-15T16:30+02:00",
      "cntx_user_id": "test-user-123",
      "cntx_user_name": "Test User"
    };

    console.log('📦 Test payload:', testPayload);

    const response = await fetch('https://apiuniverse.duytan.edu.vn/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload)
    });

    console.log('📨 Response status:', response.status);
    console.log('📨 Response ok:', response.ok);

    if (response.ok) {
      const data = await response.text();
      try {
        const jsonData = JSON.parse(data);
        console.log('✅ API Response (JSON):', jsonData);
        return jsonData;
      } catch {
        console.log('✅ API Response (Text):', data);
        return data;
      }
    } else {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);
      return null;
    }

  } catch (error) {
    console.error('💥 API Test Failed:', error);
    return null;
  }
}

// Test with current timestamp
async function testWithCurrentTime() {
  console.log("🧪 Testing with current timestamp...");

  try {
    const now = new Date();
    const expTime = new Date(now.getTime() + (90 * 60 * 1000)); // 90 minutes

    const testPayload = {
      "alg": "HS256",
      "secret": "myappsecret",
      "aud": "myappid",
      "room": "*",
      "nbf": now.toISOString().replace('Z', '+00:00'),
      "exp": expTime.toISOString().replace('Z', '+00:00'),
      "cntx_user_id": "current-test-user",
      "cntx_user_name": "Current Test User"
    };

    console.log('📦 Current time payload:', testPayload);

    const response = await fetch('https://apiuniverse.duytan.edu.vn/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload)
    });

    console.log('📨 Response status:', response.status);

    if (response.ok) {
      const data = await response.text();
      console.log('✅ Current Time Test Success:', data);
      return data;
    } else {
      const errorText = await response.text();
      console.error('❌ Current Time Test Error:', errorText);
      return null;
    }

  } catch (error) {
    console.error('💥 Current Time Test Failed:', error);
    return null;
  }
}

// Run tests
async function runAllTests() {
  await testDuyTanAPI();
  await testWithCurrentTime();
  console.log("🏁 All tests completed!");
}

// Export functions to window
window.testDuyTanAPI = testDuyTanAPI;
window.testWithCurrentTime = testWithCurrentTime;
window.runAllTests = runAllTests;

console.log("💡 Available test functions:");
console.log("- window.testDuyTanAPI() - Test with example payload");
console.log("- window.testWithCurrentTime() - Test with current timestamp");
console.log("- window.runAllTests() - Run all tests");

// Auto run
runAllTests();
