import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notPassingHeader: {
    id: 'progress.certificateStatus.notPassingHeader',
    defaultMessage: 'Trạng thái chứng chỉ',
    description: 'Header text when learner certifcate status is not passing',
  },
  notPassingBody: {
    id: 'progress.certificateStatus.notPassingBody',
    defaultMessage: 'Để đủ điều kiện nhận chứng chỉ, bạn phải đạt điểm đạt.',
    description: 'Body text when learner certifcate status is not passing',
  },
  inProgressHeader: {
    id: 'progress.certificateStatus.inProgressHeader',
    defaultMessage: 'Sắp có thêm nội dung!',
    description: 'Header text when learner certifcate is in progress',
  },
  inProgressBody: {
    id: 'progress.certificateStatus.inProgressBody',
    defaultMessage: 'Có vẻ như khóa học này sẽ có thêm nội dung được phát hành trong tương lai. Hãy chú ý các email cập nhật hoặc quay lại khóa học để xem khi nào nội dung này có sẵn.',
    description: 'Body text when learner certifcate is in progress',
  },
  requestableHeader: {
    id: 'progress.certificateStatus.requestableHeader',
    defaultMessage: 'Trạng thái chứng chỉ',
    description: 'Header text when learner certifcate status is requestable',
  },
  requestableBody: {
    id: 'progress.certificateStatus.requestableBody',
    defaultMessage: 'Chúc mừng, bạn đã đủ điều kiện nhận chứng chỉ! Để truy cập chứng chỉ của mình, hãy yêu cầu bên dưới.',
    description: 'Body text when learner certifcate status is requestable',
  },
  requestableButton: {
    id: 'progress.certificateStatus.requestableButton',
    defaultMessage: 'Yêu cầu chứng chỉ',
    description: 'Button text when learner certifcate status is requestable',
  },
  unverifiedHeader: {
    id: 'progress.certificateStatus.unverifiedHeader',
    defaultMessage: 'Trạng thái chứng chỉ',
    description: 'Header text when learner certifcate status is unverified',
  },
  unverifiedButton: {
    id: 'progress.certificateStatus.unverifiedButton',
    defaultMessage: 'Xác minh ID',
    description: 'Button text when learner certifcate status is unverified',
  },
  unverifiedPendingBody: {
    id: 'progress.certificateStatus.courseCelebration.verificationPending',
    defaultMessage: 'Xác minh ID của bạn đang chờ xử lý và chứng chỉ của bạn sẽ có sẵn sau khi được phê duyệt.',
    description: 'Body text when learner certifcate status is unverified pending',
  },
  downloadableHeader: {
    id: 'progress.certificateStatus.downloadableHeader',
    defaultMessage: 'Chứng chỉ của bạn đã sẵn sàng!',
    description: 'Header text when the certifcate is available',
  },
  viewableButton: {
    id: 'progress.certificateStatus.viewableButton',
    defaultMessage: 'Xem chứng chỉ của tôi',
    description: 'Button text which view or links to the certifcate',
  },
  notAvailableHeader: {
    id: 'progress.certificateStatus.notAvailableHeader',
    defaultMessage: 'Trạng thái chứng chỉ',
    description: 'Header text when the certifcate is not available',
  },
  notAvailableEndDateBody: {
    id: 'progress.certificateBody.notAvailable.endDate',
    defaultMessage: 'Điểm cuối cùng và mọi chứng chỉ đạt được sẽ có sẵn sau ngày {endDate}.',
    description: 'Shown for learners who have finished a course before grades and certificates are available.',
  },
  upgradeHeader: {
    id: 'progress.certificateStatus.upgradeHeader',
    defaultMessage: 'Nhận chứng chỉ',
    description: 'Header text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeBody: {
    id: 'progress.certificateStatus.upgradeBody',
    defaultMessage: 'Bạn đang ở chế độ học thử và không đủ điều kiện để nhận chứng chỉ. Để có chứng chỉ, hãy nâng cấp khóa học của bạn ngay hôm nay.',
    description: 'Body text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeButton: {
    id: 'progress.certificateStatus.upgradeButton',
    defaultMessage: 'Nâng cấp ngay',
    description: 'Button text which leaner needs to upgrade to get the certifcate',
  },
  unverifiedHomeHeader: {
    id: 'progress.certificateStatus.unverifiedHomeHeader.v2',
    defaultMessage: 'Xác minh danh tính của bạn để đủ điều kiện nhận chứng chỉ.',
    description: 'Header text when the learner needs to do verification to earn a certifcate ',
  },
  unverifiedHomeButton: {
    id: 'progress.certificateStatus.unverifiedHomeButton',
    defaultMessage: 'Xác minh ID của tôi',
    description: 'Button text which leaner needs to do verification to earn a certifcate',
  },
  unverifiedHomeBody: {
    id: 'progress.certificateStatus.unverifiedHomeBody',
    defaultMessage: 'Để tạo chứng chỉ cho khóa học này, bạn phải hoàn tất quy trình xác minh ID.',
    description: 'Body text when the learner needs to do verification to earn a certifcate',
  },
});

export default messages;