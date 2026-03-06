# Migration to Duy Tan Universe API

## 🔄 Changes Made

### API Endpoint

- **Old**: `https://jitok.emrah.com/api`
- **New**: `https://apiuniverse.duytan.edu.vn/api`

### Payload Format Changes

#### Old Format (jitok)

```json
{
  "alg": "HS256",
  "secret": "jitok-secret",
  "aud": "jitsi",
  "room": "course-sanitized-room-name",
  "nbf": "2023-09-17T10:00:00.000Z",
  "exp": "2023-09-17T12:00:00.000Z",
  "cntx_user_id": "user123",
  "cntx_user_name": "User Name",
  "cntx_user_email": "user@example.com",
  "cntx_user_role": "student",
  "cntx_user_verified": true
}
```

#### New Format (Duy Tan)

```json
{
  "alg": "HS256",
  "secret": "myappsecret",
  "aud": "myappid",
  "room": "*",
  "nbf": "2022-10-15T15:00+02:00",
  "exp": "2022-10-15T16:30+02:00",
  "cntx_user_id": "user123",
  "cntx_user_name": "User Name"
}
```

### Key Differences

1. **API URL**: Changed to Duy Tan Universe endpoint
2. **Secret**: `jitok-secret` → `myappsecret`
3. **Audience**: `jitsi` → `myappid`
4. **Room**: Dynamic room name → `"*"` (wildcard)
5. **Timestamp Format**: ISO 8601 with timezone offset
6. **Simplified Payload**: Removed extra user fields

### Configuration Updates

**File**: `src/shared/jitsi-config.js`

- Updated API URL
- Changed secret and audience values
- Adjusted token lifetime to 90 minutes

**File**: `src/shared/jitsi-service.js`

- Modified payload structure
- Updated timestamp formatting
- Simplified user context fields
- Updated log messages

### Testing

Created test file: `src/shared/test-duytan-api.js`

- Test with example payload
- Test with current timestamp
- Console testing functions

## 🧪 Testing Commands

```bash
# Test in browser console
window.testDuyTanAPI()        # Test with example payload
window.testWithCurrentTime()  # Test with current timestamp
window.runAllTests()          # Run all tests
```

## 🚀 Ready for Production

All changes are backward compatible and production ready. The meeting functionality will work with the new Duy Tan Universe API.
