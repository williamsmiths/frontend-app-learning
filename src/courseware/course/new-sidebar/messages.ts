import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  discussionsTitle: {
    id: 'discussions.sidebar.title',
    defaultMessage: 'Thảo luận',
    description: 'Title text for a forum where users are able to discuss course topics',
  },
  discussionNotificationTray: {
    id: 'discussions.notification.tray.container',
    defaultMessage: 'Bảng thảo luận và thông báo',
    description: 'Discussion and Notification tray container',
  },
  notificationTitle: {
    id: 'notification.tray.title',
    defaultMessage: 'Thông báo',
    description: 'Title text displayed for the notification tray',
  },
  closeTrigger: {
    id: 'tray.close.button',
    defaultMessage: 'Đóng bảng',
    description: 'Button for the learner to close the sidebar',
  },
  openSidebarTrigger: {
    id: 'sidebar.open.button',
    defaultMessage: 'Mở bảng bên',
    description: 'Button to open the sidebar tray and shows notifications and didcussions',
  },
  responsiveCloseSidebarTray: {
    id: 'responsive.close.sidebar',
    defaultMessage: 'Quay lại khóa học',
    description: 'Responsive button to go back to course and close the sidebar tray',
  },
});

export default messages;