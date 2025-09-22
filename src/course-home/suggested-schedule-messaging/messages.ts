import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  suggestedSchedule: {
    id: 'datesBanner.suggestedSchedule',
    defaultMessage: 'Chúng tôi đã xây dựng một lịch học gợi ý để giúp bạn theo sát tiến độ. Nhưng đừng lo — lịch học này linh hoạt, vì vậy bạn có thể học theo tốc độ của riêng mình.',
    description: 'Messaging that explain the gaol and the effect fo the suggested schedule',
  },
  upgradeToCompleteHeader: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.header',
    defaultMessage: 'Nâng cấp để mở khóa',
    description: 'Messaging that prompts users to upgrade their course status in order to access locked course content',
  },
  upgradeToCompleteBody: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.body',
    defaultMessage: 'Bạn đang học thử khóa học này, có nghĩa là bạn không thể tham gia các bài tập có chấm điểm. Để hoàn thành các bài tập có chấm điểm trong khóa học, bạn có thể nâng cấp ngay hôm nay.',
    description: 'It explain the effect of upgrading the course',
  },
  upgradeToCompleteButton: {
    id: 'datesBanner.upgradeToCompleteGradedBanner.button',
    defaultMessage: 'Nâng cấp ngay',
    description: 'Button that prompts users to upgrade their course status',
  },
  upgradeToShiftBody: {
    id: 'datesBanner.upgradeToResetBanner.body',
    defaultMessage: 'Để giữ đúng tiến độ, bạn có thể cập nhật lịch học này và dời các bài tập quá hạn sang tương lai. Đừng lo — bạn sẽ không mất đi tiến trình đã hoàn thành khi thay đổi hạn nộp.',
    description: 'Text that explain the consequences of resetting dates when learner needs to upgrade to do so',
  },
  upgradeToShiftButton: {
    id: 'datesBanner.upgradeToResetBanner.button',
    defaultMessage: 'Nâng cấp để dời hạn nộp',
    description: 'Button that prompts users to upgrade their course status before they can shift their due dates into the future',
  },
  missedDeadlines: {
    id: 'datesBanner.resetDatesBanner.header',
    defaultMessage: 'Có vẻ như bạn đã bỏ lỡ một số hạn nộp quan trọng dựa trên lịch học gợi ý của chúng tôi.',
    description: 'Text shown when leaner missed assignment due date',
  },
  shiftDatesBody: {
    id: 'datesBanner.resetDatesBanner.body',
    defaultMessage: 'Để giữ đúng tiến độ, bạn có thể cập nhật lịch học này và dời các bài tập quá hạn sang tương lai. Đừng lo — bạn sẽ không mất đi tiến trình đã hoàn thành khi thay đổi hạn nộp.',
    description: 'Text that explain the consequences of resetting dates',
  },
  shiftDatesButton: {
    id: 'datesBanner.resetDatesBanner.button',
    defaultMessage: 'Dời hạn nộp',
    description: 'Button that prompts users to move their due dates into the future',
  },
});

export default messages;