import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

import { OkayButtonFormattedMessage } from './GenericTourFormattedMessages';

const existingUserCourseHomeTour = ({ enabled, onEnd }) => ({
  checkpoints: [{
    body: <FormattedMessage
      id="tours.existingUserTour.launchTourCheckpoint.body"
      defaultMessage="Chúng tôi vừa bổ sung một vài tính năng mới cho trải nghiệm khóa học. Bạn cần hỗ trợ để làm quen? Hãy tham gia chuyến tham quan để tìm hiểu thêm."
    />,
    placement: 'left',
    target: '#courseHome-launchTourLink',
  }],
  enabled,
  endButtonText: <OkayButtonFormattedMessage />,
  onEnd,
  onEscape: onEnd,
  tourId: 'existingUserCourseHomeTour',
});

export default existingUserCourseHomeTour;
