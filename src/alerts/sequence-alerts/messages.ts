import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  entranceExamTextNotPassing: {
    id: 'learn.sequence.entranceExamTextNotPassing',
    defaultMessage: 'Để truy cập nội dung khóa học, bạn phải đạt {entranceExamMinimumScorePct}% trở lên trong bài kiểm tra này. Điểm hiện tại của bạn là {entranceExamCurrentScore}%.',
  },
  entranceExamTextPassed: {
    id: 'learn.sequence.entranceExamTextPassed',
    defaultMessage: 'Điểm của bạn là {entranceExamCurrentScore}%. Bạn đã vượt qua bài kiểm tra đầu vào.',
  },
});

export default messages;