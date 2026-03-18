import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  failure: {
    id: 'learning.loading.failure',
    defaultMessage: 'Đã xảy ra lỗi khi tải khóa học này.',
    description: 'Có thể do kết nối internet hoặc bất kỳ lý do kỹ thuật nào khác',
  },
  loading: {
    id: 'learning.loading',
    defaultMessage: 'Đang tải trang khóa học…',
    description: 'Khi nội dung khóa học vẫn đang được tải...',
  },
});

export default messages;