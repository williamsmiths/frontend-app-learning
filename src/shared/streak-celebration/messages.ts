import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  congratulations: {
    id: 'learning.streakCelebration.congratulations',
    defaultMessage: 'Congratulations!',
    description: 'Shown to learners when are using the learning app for X days in a row',
  },
  streakBody: {
    id: 'learning.streakCelebration.body',
    defaultMessage: 'Tiếp tục nhé, bạn đang tiến bộ rất tốt!',
  },
  streakButton: {
    id: 'learning.streakCelebration.button',
    defaultMessage: 'Tiếp tục cố gắng',
    description: 'Text on the button which closes the celebration dialog',
  },
  streakButtonSrOnly: {
    id: 'learning.streakCelebration.buttonSrOnly',
    defaultMessage: 'Đóng cửa sổ và tiếp tục',
    description: 'Screenreader label for streakButton text',
  },
  streakButtonAA759: {
    id: 'learning.streakCelebration.buttonAA759',
    defaultMessage: 'Tiếp tục khóa học',
  },
  streakHeader: {
    id: 'learning.streakCelebration.header',
    defaultMessage: 'ngày liên tiếp',
    description: 'Will come after a number. For example, 3 day streak',
  },
  streakFactoidABoldedSection: {
    id: 'learning.streakCelebration.factoidABoldedSection',
    defaultMessage: 'có khả năng vượt qua khóa học cao gấp 20 lần',
    description: 'This bolded section is in the following sentence: Users who learn 3 days in a row {bolded_section} than those who don\'t.',
  },
  streakFactoidBBoldedSection: {
    id: 'learning.streakCelebration.factoidBBoldedSection',
    defaultMessage: 'hoàn thành nhiều nội dung khóa học gấp 5 lần so với trung bình',
    description: 'This bolded section is in the following sentence: Users who learn 3 days in a row {bolded_section} vs. those who don\'t.',
  },
  streakDiscountMessage: {
    id: 'learning.streakCelebration.streakDiscountMessage',
    defaultMessage: 'Bạn đã mở khóa ưu đãi giảm {percent}% khi nâng cấp khóa học này, chỉ trong thời gian có hạn.',
    description: 'This message describes a discount the user becomes eligible for when they hit their three day streak',
  },
});

export default messages;