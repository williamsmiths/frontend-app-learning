import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'learn.lockPaywall.title': {
    id: 'learn.lockPaywall.title',
    defaultMessage: 'Các bài tập có chấm điểm đang bị khóa',
    description: 'Heading for message shown to indicate that a piece of content is unavailable to audit track users.',
  },
  'learn.lockPaywall.content': {
    id: 'learn.lockPaywall.content',
    defaultMessage: 'Nâng cấp để truy cập các tính năng bị khóa như bài này và tận dụng tối đa khóa học của bạn.',
    description: 'Message shown to indicate that a piece of content is unavailable to audit track users.',
  },
  'learn.lockPaywall.content.pastExpiration': {
    id: 'learn.lockPaywall.content.pastExpiration',
    defaultMessage: 'Hạn nâng cấp cho khóa học này đã qua. Để nâng cấp, hãy đăng ký phiên học tiếp theo.',
    description: 'Message shown to indicate that a piece of content is unavailable to audit track users in a course where the expiration deadline has passed.',
  },
  'learn.lockPaywall.courseDetails': {
    id: 'learn.lockPaywall.courseDetails',
    defaultMessage: 'Xem chi tiết khóa học',
    description: 'Link to the course details page for this course with a past expiration date.',
  },
  'learn.lockPaywall.example.alt': {
    id: 'learn.lockPaywall.example.alt',
    defaultMessage: 'Chứng chỉ mẫu',
    description: 'Alternate text displayed when the example certificate image cannot be displayed.',
  },
  'learn.lockPaywall.list.intro': {
    id: 'learn.lockPaywall.list.intro',
    defaultMessage: 'Khi nâng cấp, bạn sẽ:',
    description: 'Text displayed to introduce the list of benefits from upgrading.',
  },
});

export default messages;