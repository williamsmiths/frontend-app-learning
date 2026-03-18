import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  beginTour: {
    id: 'tours.button.beginTour',
    defaultMessage: 'Bắt đầu tour',
    description: 'Nút dùng để bắt đầu một chuyến tham quan website',
  },
  launchTour: {
    id: 'tours.button.launchTour',
    defaultMessage: 'Khởi chạy tour',
    description: 'Nút dùng để khởi chạy một chuyến tham quan website',
  },
  newUserModalBody: {
    id: 'tours.newUserModal.body',
    defaultMessage: 'Hãy cùng tham quan nhanh {siteName} để bạn tận dụng tối đa khóa học của mình.',
  },
  newUserModalTitleWelcome: {
    id: 'tours.newUserModal.title.welcome',
    defaultMessage: 'Chào mừng bạn đến với',
    description: 'Phần mở đầu của câu "Chào mừng bạn đến với khóa học edX của bạn!"',
  },
  skipForNow: {
    id: 'tours.button.skipForNow',
    defaultMessage: 'Bỏ qua ngay bây giờ',
    description: 'Nút dùng để đóng modal và bỏ qua tour tùy chọn của website',
  },
});

export default messages;