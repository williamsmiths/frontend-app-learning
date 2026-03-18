import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  congratulations: {
    id: 'learning.streakCelebration.congratulations',
    defaultMessage: 'Chúc mừng!',
    description: 'Hiển thị cho người học khi họ sử dụng ứng dụng học tập liên tiếp X ngày',
  },
  streakBody: {
    id: 'learning.streakCelebration.body',
    defaultMessage: 'Tiếp tục duy trì, bạn đang làm rất tốt!',
  },
  streakButton: {
    id: 'learning.streakCelebration.button',
    defaultMessage: 'Tiếp tục cố gắng',
    description: 'Văn bản trên nút để đóng hộp thoại chúc mừng',
  },
  streakButtonSrOnly: {
    id: 'learning.streakCelebration.buttonSrOnly',
    defaultMessage: 'Đóng modal và tiếp tục',
    description: 'Nhãn dành cho trình đọc màn hình cho nút streakButton',
  },
  streakButtonAA759: {
    id: 'learning.streakCelebration.buttonAA759',
    defaultMessage: 'Tiếp tục với khóa học',
  },
  streakHeader: {
    id: 'learning.streakCelebration.header',
    defaultMessage: 'ngày liên tiếp',
    description: 'Được đặt sau một con số. Ví dụ: 3 ngày liên tiếp',
  },
  streakFactoidABoldedSection: {
    id: 'learning.streakCelebration.factoidABoldedSection',
    defaultMessage: 'có khả năng vượt qua khóa học gấp 20 lần',
    description: 'Phần chữ in đậm trong câu: Người dùng học liên tiếp 3 ngày {bolded_section} so với những người không học.',
  },
  streakFactoidBBoldedSection: {
    id: 'learning.streakCelebration.factoidBBoldedSection',
    defaultMessage: 'hoàn thành trung bình nhiều nội dung khóa học gấp 5 lần',
    description: 'Phần chữ in đậm trong câu: Người dùng học liên tiếp 3 ngày {bolded_section} so với những người không học.',
  },
  streakDiscountMessage: {
    id: 'learning.streakCelebration.streakDiscountMessage',
    defaultMessage: 'Bạn đã mở khóa giảm giá {percent}% khi nâng cấp khóa học này trong thời gian giới hạn.',
    description: 'Thông báo mô tả ưu đãi giảm giá khi người dùng đạt chuỗi học liên tiếp ba ngày',
  },
});

export default messages;