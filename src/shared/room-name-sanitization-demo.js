// Demo script để test Room Name Sanitization
// Có thể run trong browser console

console.log('=== JITSI ROOM NAME SANITIZATION DEMO ===');

// Function để sanitize room name (copy từ jitsi-service.js)
const sanitizeRoomName = (courseId) => {
  return courseId
    .replace(/:/g, '-')        // Thay dấu hai chấm bằng gạch ngang
    .replace(/\+/g, '-')       // Thay dấu cộng bằng gạch ngang
    .replace(/\s+/g, '-')      // Thay khoảng trắng bằng gạch ngang
    .replace(/[^a-zA-Z0-9-_]/g, '-') // Thay các ký tự đặc biệt khác bằng gạch ngang
    .replace(/-+/g, '-')       // Thay nhiều gạch ngang liên tiếp bằng một gạch ngang
    .toLowerCase();            // Chuyển về chữ thường
};

// Test cases thực tế
const testCases = [
  {
    original: 'course-v1:OpenedX+DemoX+DemoCourse',
    description: 'Course ID thực tế từ edX (có dấu : và +)'
  },
  {
    original: 'course-v1:MITx+6.00x+2023_Spring',
    description: 'MIT course với ký tự _ và số'
  },
  {
    original: 'course-v1:HarvardX+CS50+2024',
    description: 'Harvard CS50 course'
  },
  {
    original: 'course-v1:StanfordX+AI+2024@#$%',
    description: 'Course với ký tự đặc biệt'
  },
  {
    original: 'Course With Many   Spaces',
    description: 'Course với nhiều khoảng trắng'
  },
  {
    original: 'UPPERCASE-course-ID',
    description: 'Course với chữ hoa'
  }
];

console.log('Testing room name sanitization...\n');

testCases.forEach((testCase, index) => {
  const sanitized = sanitizeRoomName(testCase.original);
  const finalUrl = `https://meet.jit.si/course-${sanitized}`;

  console.log(`Test ${index + 1}: ${testCase.description}`);
  console.log(`Original:  "${testCase.original}"`);
  console.log(`Sanitized: "${sanitized}"`);
  console.log(`Final URL: ${finalUrl}`);
  console.log(`Valid URL: ${isValidJitsiUrl(finalUrl) ? '✅ YES' : '❌ NO'}`);
  console.log('---');
});

// Helper function để validate Jitsi URL
function isValidJitsiUrl(url) {
  try {
    const urlObj = new URL(url);
    const roomName = urlObj.pathname.substring(1); // Remove leading /

    // Jitsi room name rules:
    // - Only alphanumeric, hyphens, underscores
    // - No special characters
    // - No spaces
    const validPattern = /^[a-zA-Z0-9-_]+$/;
    return validPattern.test(roomName);
  } catch (error) {
    return false;
  }
}

console.log('\n=== COMPARISON WITH PROBLEMATIC CASES ===');

const problematicCases = [
  'course-v1:OpenedX+DemoX+DemoCourse', // Original có vấn đề
  'course-v1-OpenedX-DemoX-DemoCourse'  // Đã fix manual
];

problematicCases.forEach((courseId, index) => {
  const sanitized = sanitizeRoomName(courseId);
  const url = `https://meet.jit.si/course-${sanitized}`;

  console.log(`Case ${index + 1}:`);
  console.log(`Input: "${courseId}"`);
  console.log(`Output: "${sanitized}"`);
  console.log(`URL: ${url}`);
  console.log(`Status: ${isValidJitsiUrl(url) ? '✅ WORKING' : '❌ BROKEN'}`);
  console.log('');
});

console.log('=== DEMO COMPLETED ===');
console.log('You can copy any of the generated URLs above and test them in Jitsi Meet!');

// Export cho global scope để có thể gọi từ console
if (typeof window !== 'undefined') {
  window.sanitizeRoomName = sanitizeRoomName;
  window.isValidJitsiUrl = isValidJitsiUrl;
  console.log('\nFunctions available in console:');
  console.log('- window.sanitizeRoomName(courseId)');
  console.log('- window.isValidJitsiUrl(url)');
}
