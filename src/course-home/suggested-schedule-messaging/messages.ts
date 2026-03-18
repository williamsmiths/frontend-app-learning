import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  suggestedSchedule: {
    id: 'datesBanner.suggestedSchedule',
    defaultMessage: 'Chúng tôi đã xây dựng một lịch trình gợi ý để giúp bạn theo kịp tiến độ. Nhưng đừng lo—nó linh hoạt, nên bạn có thể học theo tốc độ của riêng mình.',
    description: 'Messaging that explain the gaol and the effect fo the suggested schedule',
  },
  upgradeToCompleteHeader: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.header',
    defaultMessage: 'Nâng cấp để mở khóa',
    description: 'Messaging that prompts users to upgrade their course status in order to access locked course content',
  },
  upgradeToCompleteBody: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.body',
    defaultMessage: 'Bạn đang theo dõi khóa học ở chế độ kiểm tra (audit), nghĩa là bạn không thể tham gia các bài tập có điểm. Để hoàn thành các bài tập có điểm trong khóa học này, bạn có thể nâng cấp ngay hôm nay.',
    description: 'It explain the effect of upgrading the course',
  },
  upgradeToCompleteButton: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.button',
    defaultMessage: 'Nâng cấp ngay',
    description: 'Button that prompts users to upgrade their course status',
  },
  upgradeToShiftBody: {
    id: 'datesBanner.upgradeToResetBanner.body',
    defaultMessage: 'Để theo kịp tiến độ, bạn có thể cập nhật lịch trình này và chuyển các bài tập quá hạn sang tương lai. Đừng lo—bạn sẽ không mất bất kỳ tiến trình nào đã đạt được khi thay đổi ngày hạn.',
    description: 'Text that explain the consequences of resetting dates when learner needs to upgrade to do so',
  },
  upgradeToShiftButton: {
    id: 'datesBanner.upgradeToResetBanner.button',
    defaultMessage: 'Nâng cấp để thay đổi ngày hạn',
    description: 'Button that prompts users to upgrade their course status before they can shift their due dates into the future',
  },
  missedDeadlines: {
    id: 'datesBanner.resetDatesBanner.header',
    defaultMessage: 'Có vẻ như bạn đã bỏ lỡ một số hạn nộp quan trọng dựa trên lịch trình gợi ý của chúng tôi.',
    description: 'Text shown when leaner missed assignment due date',
  },
  shiftDatesBody: {
    id: 'datesBanner.resetDatesBanner.body',
    defaultMessage: 'Để theo kịp tiến độ, bạn có thể cập nhật lịch trình này và chuyển các bài tập quá hạn sang tương lai. Đừng lo—bạn sẽ không mất bất kỳ tiến trình nào đã đạt được khi thay đổi ngày hạn.',
    description: 'Text that explain the consequences of resetting dates',
  },
  shiftDatesButton: {
    id: 'datesBanner.resetDatesBanner.button',
    defaultMessage: 'Chuyển ngày hạn',
    description: 'Button that prompts users to move their due dates into the future',
  },
});

export default messages;