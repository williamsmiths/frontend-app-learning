import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  activities: {
    id: 'learning.effortEstimation.activities',
    defaultMessage: '{activityCount, plural, one {# hoạt động} other {# hoạt động}}',
  },
  minutesAbbreviated: {
    id: 'learning.effortEstimation.minutesAbbreviated',
    defaultMessage: '{minuteCount, plural, one {# phút} other {# phút}}',
    description: 'Số phút theo cách viết tắt, ví dụ: 5 phút',
  },
  minutesFull: {
    id: 'learning.effortEstimation.minutesFull',
    defaultMessage: '{minuteCount, plural, one {# phút} other {# phút}}',
    description: 'Số phút viết đầy đủ, ví dụ: 5 phút',
  },
});

export default messages;