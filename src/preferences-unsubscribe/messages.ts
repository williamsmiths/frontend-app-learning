import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unsubscribeLoading: {
    id: 'learning.notification.preferences.unsubscribe.loading',
    defaultMessage: 'Đang tải',
  },
  unsubscribeSuccessHeading: {
    id: 'learning.notification.preferences.unsubscribe.successHeading',
    defaultMessage: 'Hủy đăng ký thành công',
  },
  unsubscribeSuccessMessage: {
    id: 'learning.notification.preferences.unsubscribe.successMessage',
    defaultMessage: 'Bạn đã hủy đăng ký nhận email tóm tắt về hoạt động học tập thành công',
  },
  unsubscribeFailedHeading: {
    id: 'learning.notification.preferences.unsubscribe.failedHeading',
    defaultMessage: 'Lỗi khi hủy đăng ký tùy chọn',
  },
  unsubscribeFailedMessage: {
    id: 'learning.notification.preferences.unsubscribe.failedMessage',
    defaultMessage: 'URL không hợp lệ hoặc mã token đã hết hạn',
  },
  preferenceCenterUrl: {
    id: 'learning.notification.preferences.unsubscribe.preferenceCenterUrl',
    defaultMessage: 'trang tùy chọn',
  },
});

export default messages;