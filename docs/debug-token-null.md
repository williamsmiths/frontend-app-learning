# 🐛 DEBUG: Token Creation Returns NULL

## Vấn đề hiện tại

- `createJitsiToken()` đang return `null` thay vì JWT token
- Cần debug để tìm nguyên nhân root cause

## 🔍 Bước debug từng bước

### 1. Kiểm tra Network và API

```javascript
// Run trong browser console:
window.testJitokAPIStandalone();
```

**Mục đích:** Verify API jitok.emrah.com có hoạt động không

### 2. Kiểm tra Payload và Configuration

```javascript
// Check config trong console logs:
// - Xem JITSI_CONFIG có load đúng không
// - Verify secret và audience có giá trị hợp lệ
// - Check room name sau khi sanitize

window.testJitokAPI(); // Test với config thật
```

### 3. Kiểm tra Enhanced Logging

Trong `createJitsiToken()` function đã có enhanced logging:

- 🚀 API URL
- 📦 Payload (secret hidden)
- 📡 API request status
- 📨 Response details
- 📥 Raw response text
- ✅ / ❌ Success/error indicators

### 4. Possible Issues và Solutions

#### Issue 1: Network/CORS

**Symptoms:**

- Network error trong console
- CORS policy blocked

**Solutions:**

- Check browser network tab
- Try từ different browser/incognito
- Test API từ Postman/curl

#### Issue 2: API Payload Invalid

**Symptoms:**

- API returns 400/422 status
- Error message trong response

**Solutions:**

- Verify payload format khớp với jitok API spec
- Check required fields đầy đủ
- Validate timestamps format

#### Issue 3: API Service Down

**Symptoms:**

- 500/503 status codes
- Connection timeout

**Solutions:**

- Check jitok.emrah.com availability
- Try vào thời điểm khác
- Contact API provider

#### Issue 4: Response Parsing Error

**Symptoms:**

- 200 OK nhưng JSON parse fails
- "No token in response" error

**Solutions:**

- Check raw response format
- Verify response structure
- Handle different response formats

## 🧪 Testing Commands

Thêm vào browser console để debug:

```javascript
// 1. Test API trực tiếp
window.testJitokAPIStandalone();

// 2. Test với config hiện tại
window.testJitokAPI();

// 3. Check current data
console.log("Course ID:", window.currentCourseId);
console.log("Course Info:", window.currentCourseInfo);
console.log("User Info:", window.currentUserInfo);

// 4. Manual token creation test
const testCourse = { courseId: "test-course-123" };
const testUser = { userId: "test", userName: "Test User" };
window.createJitsiToken(testCourse, testUser).then((token) => {
  console.log("Manual test token:", token);
});
```

## 📋 Debug Checklist

- [ ] Network connectivity working
- [ ] jitok.emrah.com API reachable
- [ ] Payload format correct
- [ ] Response parsing successful
- [ ] Token extracted from response
- [ ] No JavaScript errors in console
- [ ] CORS/security issues resolved

## 🚨 Common Gotchas

1. **API Key/Secret**: Nếu jitok yêu cầu real API key
2. **Rate Limiting**: API có thể limit requests
3. **Payload Format**: Exact format requirements của jitok
4. **Browser Security**: CORS, mixed content issues
5. **Network**: Corporate firewall, VPN issues

## Next Steps

1. Run `window.testJitokAPIStandalone()` và paste console output
2. Check browser Network tab cho API calls
3. Verify response format matches expected structure
4. If API working, debug payload generation logic
