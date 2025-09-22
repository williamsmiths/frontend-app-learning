import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  defaultEmailBody: {
    id: 'learning.celebration.emailBody',
    defaultMessage: 'Bạn đang dành thời gian học gì?',
    description: 'Body when sharing course progress via email',
  },
  shareEmail: {
    id: 'learning.social.shareEmail',
    defaultMessage: 'Chia sẻ tiến trình học của bạn qua email.',
    description: 'Text email share button',
  },
  shareService: {
    id: 'learning.social.shareService',
    defaultMessage: 'Chia sẻ tiến trình học của bạn trên {service}.',
  },
});

export default messages;