import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  header: {
    id: 'learn.hiddenAfterDue.header',
    defaultMessage: 'Hạn nộp của bài tập này đã qua.',
    description: 'Shown when content of a course is longer available because due date passed',
  },
  description: {
    id: 'learn.hiddenAfterDue.description',
    defaultMessage: 'Do hạn nộp đã qua, bài tập này không còn khả dụng.',
    description: 'It explain why the content is not available',
  },
  gradeAvailable: {
    id: 'learn.hiddenAfterDue.gradeAvailable',
    defaultMessage: 'Nếu bạn đã hoàn thành bài tập này, điểm của bạn có thể xem trên {progressPage}.',
    description: 'Text that precedes link that redirect to progress page',
  },
  progressPage: {
    id: 'learn.hiddenAfterDue.progressPage',
    defaultMessage: 'trang tiến trình',
    description: 'This is the text for the link embedded in learn.hiddenAfterDue.gradeAvailable',
  },
});

export default messages;