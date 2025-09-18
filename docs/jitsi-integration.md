# Jitsi Integration cho Frontend App Learning

## Tổng quan

Tích hợp này cho phép sinh viên join meeting Jitsi trực tiếp từ trang khóa học với authentication thông qua JWT token.

## Các file được tạo/chỉnh sửa

### 1. Files mới được tạo:

- `src/shared/jitsi-service.js` - Service chính để tạo token và URL meeting
- `src/shared/jitsi-config.js` - File cấu hình cho Jitsi integration
- `docs/jitsi-integration.md` - File hướng dẫn này

### 2. Files được chỉnh sửa:

- `src/course-tabs/CourseTabsNavigation.jsx` - Thêm logic tạo token và log thông tin khóa học
- `src/tab-page/LoadedTabPage.jsx` - Truyền courseId vào CourseTabsNavigation

## Tính năng

### 1. Log thông tin khóa học

Khi component CourseTabsNavigation được render, sẽ log các thông tin sau:

- Course ID
- Course Info (title, org, etc.)
- Course Tabs
- Config

### 2. Tạo JWT token cho Jitsi

Khi click vào "Meeting", system sẽ:

- Lấy thông tin user từ edX authentication
- Lấy thông tin khóa học
- Tạo JWT token thông qua API jitok.emrah.com
- Mở meeting với token authentication

### 3. Fallback mechanism

Nếu không tạo được token, system vẫn mở meeting Jitsi nhưng không có authentication.

## Cấu hình

### Environment Variables

Tạo các environment variables sau (thêm vào `.env` file):

```bash
# Jitsi Configuration
JITSI_SECRET=your-jitsi-secret-here
JITSI_APP_ID=your-jitsi-app-id-here
```

### Cập nhật cấu hình trong `jitsi-config.js`

```javascript
export const JITSI_CONFIG = {
  JWT_CONFIG: {
    secret: process.env.JITSI_SECRET || "myappsecret",
    audience: process.env.JITSI_APP_ID || "myappid",
    // ...
  },
  // ...
};
```

## Cách sử dụng

### 1. Từ giao diện user

- Vào trang khóa học bất kỳ
- Click vào tab "Meeting"
- System sẽ tự động tạo token và mở meeting trong tab mới

### 2. Console logs

Để debug, mở Developer Tools console và xem các log:

- Thông tin khóa học
- Thông tin user
- Quá trình tạo token
- URL meeting được tạo

## API Token Structure

Token được tạo với structure sau theo jitok format:

```json
{
  "alg": "HS256",
  "secret": "your-secret",
  "aud": "your-app-id",
  "room": "course-{courseId}",
  "nbf": "2024-10-15T15:00+02:00",
  "exp": "2024-10-15T17:00+02:00",
  "cntx_user_id": "user-id-from-edx",
  "cntx_user_name": "user-name-from-edx"
}
```

## Troubleshooting

### 1. Token creation fails

- Kiểm tra network connection đến jitok.emrah.com
- Kiểm tra secret và app ID configuration
- Xem console logs để debug

### 2. User info không hiển thị đúng

- Kiểm tra authentication state của edX
- Verify `getAuthenticatedUser()` hoạt động đúng

### 3. Course info không đúng

- Kiểm tra courseId được pass đúng vào component
- Verify model store có dữ liệu course

## Security Notes

1. **Secret Management**: Không hardcode secret trong code, sử dụng environment variables
2. **Token Lifetime**: Token có thời hạn 2 giờ, có thể điều chỉnh trong config
3. **Room Naming**: Room được tạo theo pattern `course-{courseId}` để tránh conflict

## Mở rộng

### 1. Custom room naming

Có thể thay đổi pattern tạo room trong config:

```javascript
JITSI_MEET_CONFIG: {
  roomPrefix: "custom-prefix-";
}
```

### 2. Thêm meeting features

Có thể mở rộng URL với các parameters khác:

- `config.startWithAudioMuted=true`
- `config.startWithVideoMuted=true`
- `userInfo.displayName=custom-name`

### 3. Integration với calendar

Có thể tích hợp với calendar để schedule meetings.

## Testing

### 1. Development testing

```bash
npm start
# Mở browser, vào khóa học bất kỳ
# Click tab Meeting và check console logs
```

### 2. Production testing

- Deploy với đúng environment variables
- Test với real course data
- Verify token authentication hoạt động

## Support

Nếu có vấn đề, kiểm tra:

1. Console logs cho detailed error messages
2. Network tab để xem API calls
3. Authentication state trong Redux store
