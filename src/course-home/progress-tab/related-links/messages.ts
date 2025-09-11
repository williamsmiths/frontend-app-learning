import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  datesCardDescription: {
    id: 'progress.relatedLinks.datesCard.description',
    defaultMessage: 'Xem lịch hạn nộp và các bài tập sắp tới của khóa học.',
    description: 'It explain the content of the dates tab',
  },
  datesCardLink: {
    id: 'progress.relatedLinks.datesCard.link',
    defaultMessage: 'Lịch',
    description: 'Anchor text for link that redirects to dates tab',
  },
  outlineCardDescription: {
    id: 'progress.relatedLinks.outlineCard.description',
    defaultMessage: 'Cái nhìn tổng quan về toàn bộ nội dung khóa học.',
    description: 'It explain the content of the course outline tab',
  },
  outlineCardLink: {
    id: 'progress.relatedLinks.outlineCard.link',
    defaultMessage: 'Đề cương khóa học',
    description: 'Anchor text for link that redirects to course outline tab',
  },
  relatedLinks: {
    id: 'progress.relatedLinks',
    defaultMessage: 'Liên kết liên quan',
    description: 'Headline for (related links) section in progress tab',
  },
});

export default messages;
