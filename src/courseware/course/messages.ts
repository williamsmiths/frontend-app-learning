import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notificationTray: {
    id: 'notification.tray.container',
    defaultMessage: 'Bảng thông báo',
    description: 'Notification tray container',
  },
  openNotificationTrigger: {
    id: 'notification.open.button',
    defaultMessage: 'Hiển thị bảng thông báo',
    description: 'Button to open the notification tray and show notifications',
  },
  closeNotificationTrigger: {
    id: 'notification.close.button',
    defaultMessage: 'Đóng bảng thông báo',
    description: 'Button for the learner to close the sidebar',
  },
  responsiveCloseNotificationTray: {
    id: 'responsive.close.notification',
    defaultMessage: 'Quay lại khóa học',
    description: 'Responsive button to go back to course and close the notification tray',
  },
  notificationTitle: {
    id: 'notification.tray.title',
    defaultMessage: 'Thông báo',
    description: 'Title text displayed for the notification tray',
  },
  noNotificationsMessage: {
    id: 'notification.tray.no.message',
    defaultMessage: 'Hiện tại bạn không có thông báo mới nào.',
    description: 'Text displayed when the learner has no notifications',
  },
});

export default messages;
