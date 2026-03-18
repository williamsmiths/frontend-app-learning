import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  progressHeader: {
    id: 'progress.header',
    defaultMessage: 'Tiến trình của bạn',
    description: 'Headline or title for the progress tab',
  },
  progressHeaderForTargetUser: {
    id: 'progress.header.targetUser',
    defaultMessage: 'Tiến trình khóa học của {username}',
    description: 'Header when displaying the progress for a different user',
  },
  studioLink: {
    id: 'progress.link.studio',
    defaultMessage: 'Xem chấm điểm trong Studio',
    description: 'Text shown for button that redirects to the studio if the user is a staff memember',
  },
});

export default messages;