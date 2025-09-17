# Jitsi Integration for edX Learning Platform

## 📋 Overview

Jitsi Meet integration cho phép students và instructors tham gia video meetings trực tiếp từ course navigation.

## 🚀 Features Implemented

### ✅ Core Functionality

- **Meeting Button**: Added to course navigation tabs
- **Token Generation**: JWT tokens từ jitok.emrah.com API
- **Room Management**: Auto-sanitized room names từ course IDs
- **User Authentication**: JWT cookie parsing và fallback auth
- **URL Generation**: Proper meeting URLs với token support

### ✅ Technical Implementation

- **Room Name Sanitization**: Converts `course-v1:OpenedX+DemoX+DemoCourse` → `course-course-v1-openedx-demox-democourse`
- **JWT Token Integration**: Bearer token trong meeting URL: `?jwt=token`
- **Error Handling**: Graceful fallback to tokenless meetings
- **User Role Detection**: Admin/Superuser/Student role mapping

## 📁 Files Modified

### Core Files

- `src/course-tabs/CourseTabsNavigation.jsx` - Added meeting button và click handler
- `src/shared/jitsi-service.js` - Core service cho token creation và URL generation
- `src/shared/jitsi-config.js` - Configuration constants

### Supporting Files

- `src/tab-page/LoadedTabPage.jsx` - Pass courseId prop
- Documentation files in `/docs`

## 🔧 Configuration

### Jitsi Config (`jitsi-config.js`)

```javascript
export const JITSI_CONFIG = {
  JITOK_API_URL: "https://jitok.emrah.com/api",
  JWT_CONFIG: {
    algorithm: "HS256",
    secret: "jitok-secret",
    audience: "jitsi",
    tokenLifetime: 3600000, // 1 hour
  },
  JITSI_MEET_CONFIG: {
    baseUrl: "https://meet.jit.si",
    roomPrefix: "course-",
  },
};
```

## 🎯 Usage

1. **Navigate to any course**
2. **Click "Meeting" button** trong course tabs
3. **Meeting opens** trong new tab với proper authentication

### Meeting URL Format

- **With token**: `https://meet.jit.si/course-[sanitized-course-id]?jwt=[token]`
- **Fallback**: `https://meet.jit.si/course-[sanitized-course-id]`

## 🔍 Debug Information

### Console Logs

- Course information extraction
- User authentication details
- Token creation process
- URL generation steps

### Window Objects (Development)

- `window.currentCourseId` - Current course ID
- `window.currentCourseInfo` - Course metadata
- `window.currentUserInfo` - User authentication info

## 📊 Production Ready

### ✅ Optimizations Applied

- Removed CORS workarounds
- Cleaned debug functions
- Simplified error handling
- Minimized console logging

### 🔒 Security Features

- JWT token authentication
- Role-based access control
- Sanitized room names
- Secure API communication

## 🚀 Deployment Notes

- **CORS Issues**: Resolved in production deployment
- **Token Expiration**: 1 hour default lifetime
- **Room Persistence**: Based on course ID
- **User Roles**: Mapped from edX authentication

## 🔧 Future Enhancements

- Backend proxy for enhanced security
- Meeting analytics integration
- Custom Jitsi server configuration
- Recording capabilities
