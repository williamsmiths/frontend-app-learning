# Jitsi Integration cho Frontend App Learning - Version 2.0

## Tổng quan

Tích hợp này cho phép sinh viên join meeting Jitsi trực tiếp từ trang khóa học với authentication thông qua JWT token. Phiên bản 2.0 bao gồm:

- Sanitization tên room để tránh lỗi với ký tự đặc biệt
- Lấy thông tin user từ JWT cookie của edX
- Logging chi tiết thông tin user và course
- Enhanced error handling và fallback mechanisms

## Các file được tạo/chỉnh sửa

### 1. Files mới được tạo:

- `src/shared/jitsi-service.js` - Service chính để tạo token và URL meeting
- `src/shared/jitsi-config.js` - File cấu hình cho Jitsi integration
- `src/shared/jitsi-integration.test.js` - File test các chức năng
- `docs/jitsi-integration-v2.md` - File hướng dẫn này

### 2. Files được chỉnh sửa:

- `src/course-tabs/CourseTabsNavigation.jsx` - Thêm logic tạo token và log thông tin chi tiết
- `src/tab-page/LoadedTabPage.jsx` - Truyền courseId vào CourseTabsNavigation

## Tính năng mới trong Version 2.0

### 1. Room Name Sanitization 🆕

Hệ thống tự động xử lý tên room để tránh lỗi với dấu hai chấm và ký tự đặc biệt:

```javascript
// Trước khi sanitize
"course-v1:OpenedX+DemoX+DemoCourse";

// Sau khi sanitize
"course-v1-openedx-demox-democourse";
```

**Quy tắc sanitization:**

- Thay dấu hai chấm (:) → gạch ngang (-)
- Thay dấu cộng (+) → gạch ngang (-)
- Loại bỏ khoảng trắng → gạch ngang (-)
- Loại bỏ ký tự đặc biệt → gạch ngang (-)
- Chuyển về chữ thường
- Gộp nhiều gạch ngang liên tiếp thành một

### 2. JWT Cookie Authentication 🆕

Ưu tiên lấy thông tin user từ JWT cookie `edx-jwt-cookie-header-payload`:

```javascript
// Structure của JWT cookie được decode
{
  "user_id": 4,
  "preferred_username": "admin",
  "email": "admin@email.com",
  "administrator": true,
  "superuser": true,
  "email_verified": true,
  "scopes": ["user_id", "email", "profile"]
}
```

### 3. Enhanced Logging 🆕

Log chi tiết thông tin course và user:

```console
=== COURSE INFORMATION ===
Course ID: course-v1:OpenedX+DemoX+DemoCourse
Course Title: Demo Course
Course Org: OpenedX
=========================

=== USER INFORMATION ===
User ID: 4
Username: admin
Email: admin@email.com
Is Admin: true
Is Superuser: true
Email Verified: true
========================
```

### 4. Extended Token Context 🆕

Token được tạo với thông tin user đầy đủ:

```json
{
  "alg": "HS256",
  "room": "course-course-v1-openedx-demox-democourse",
  "cntx_user_id": "4",
  "cntx_user_name": "admin",
  "cntx_user_email": "admin@email.com",
  "cntx_user_role": "admin",
  "cntx_user_verified": true
}
```

## Cách sử dụng

### 1. Từ giao diện user

- Vào trang khóa học bất kỳ
- Mở Developer Console để xem logs
- Click vào tab "Meeting"
- Hệ thống sẽ tự động:
  - Log thông tin course và user
  - Sanitize room name
  - Tạo token với user context
  - Mở meeting trong tab mới

### 2. Testing và debugging

Chạy các test functions trong browser console:

```javascript
// Test sanitization
window.testRoomNameSanitization();

// Test JWT parsing
window.testJWTParsingWithMockData();

// Test toàn bộ integration
window.testJitsiIntegration();
```

## Troubleshooting

### 1. Room creation failed (Fixed ✅)

**Vấn đề:** Course ID có dấu hai chấm gây lỗi tạo room
**Giải pháp:** Hệ thống tự động sanitize room name

### 2. JWT cookie not found

**Kiểm tra:**

- Cookie `edx-jwt-cookie-header-payload` có tồn tại không
- User đã login chưa
- Browser có block cookies không

### 3. User info không chính xác

**Fallback chain:**

1. JWT cookie → `getUserInfoFromJWT()`
2. edX Auth → `getUserInfoFromAuth()`
3. Default values → fallback config

### 4. Token creation fails

**Kiểm tra:**

- Network connection đến jitok.emrah.com
- Secret và app ID configuration
- Console logs để debug payload

## Security Improvements

### 1. JWT Cookie Parsing

- Chỉ decode payload, không verify signature (client-side)
- Fallback về authenticated user nếu cookie invalid
- Log minimal info để avoid sensitive data leakage

### 2. Room Name Security

- Sanitize input để tránh injection
- Consistent naming convention
- Lowercase để tránh case-sensitivity issues

### 3. Token Payload

- Include user verification status
- Add role-based context
- Timestamp-based expiration

## API Reference

### Main Functions

```javascript
// Sanitize course ID for room name
sanitizeRoomName(courseId);

// Get user info from JWT cookie (priority)
getUserInfoFromJWT();

// Get user info from edX auth (fallback)
getUserInfoFromAuth();

// Main user info getter (with fallback chain)
getUserInfo();

// Create Jitsi token with user context
createJitsiToken(courseInfo, userInfo);

// Create meeting URL with sanitized room name
createJitsiMeetingUrl(courseId, token);

// Test room name sanitization
testRoomNameSanitization();
```

### Configuration

```javascript
// jitsi-config.js
export const JITSI_CONFIG = {
  JITOK_API_URL: "https://jitok.emrah.com/api",
  JWT_CONFIG: {
    secret: process.env.JITSI_SECRET || "myappsecret",
    audience: process.env.JITSI_APP_ID || "myappid",
    algorithm: "HS256",
    tokenLifetime: 2 * 60 * 60 * 1000, // 2 hours
  },
  JITSI_MEET_CONFIG: {
    baseUrl: "https://meet.jit.si",
    roomPrefix: "course-",
  },
};
```

## Environment Variables

```bash
# .env file
JITSI_SECRET=your-jitsi-secret-here
JITSI_APP_ID=your-jitsi-app-id-here
```

## Migration from Version 1.0

Version 2.0 backward compatible với version 1.0:

- Existing functionality vẫn hoạt động
- New features tự động enabled
- No breaking changes

**Recommended actions:**

1. Clear browser cache để load new code
2. Test với course có dấu hai chấm trong ID
3. Verify JWT cookie parsing hoạt động
4. Check console logs để ensure proper user info

## Future Enhancements

### Planned Features

- [ ] Calendar integration
- [ ] Meeting scheduling
- [ ] Breakout rooms support
- [ ] Recording capabilities
- [ ] Custom meeting themes

### Performance Optimizations

- [ ] Cache JWT parsing results
- [ ] Batch token creation
- [ ] Offline meeting support

## Support

Để troubleshoot issues:

1. Check browser console logs
2. Verify network requests trong Network tab
3. Test JWT cookie parsing với mock data
4. Run integration tests

**Contact:** Provide support channel info here
