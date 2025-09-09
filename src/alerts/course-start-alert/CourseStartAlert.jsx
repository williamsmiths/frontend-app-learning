import React from 'react';
import PropTypes from 'prop-types';
import {
  FormattedDate,
  FormattedMessage,
  FormattedRelativeTime,
  FormattedTime,
} from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';
import { Info } from '@openedx/paragon/icons';

import { useModel } from '../../generic/model-store';
import { useFormatDate } from './hooks';

const DAY_SEC = 24 * 60 * 60; // in seconds
const DAY_MS = DAY_SEC * 1000; // in ms
const YEAR_SEC = 365 * DAY_SEC; // in seconds
const formatDate = useFormatDate();

const CourseStartAlert = ({ payload }) => {
  const {
    courseId,
  } = payload;

  const {
    start: startDate,
    userTimezone,
  } = useModel('courseHomeMeta', courseId);

  const timezoneFormatArgs = userTimezone ? { timeZone: userTimezone } : {};

  const delta = new Date(startDate) - new Date();
  const timeRemaining = Math.ceil(delta / (1000 * 60 * 60 * 24));
  if (delta < DAY_MS) {
    return (
      <Alert variant="info" icon={Info}>
        <FormattedMessage
          id="learning.outline.alert.start.short"
          defaultMessage="Khóa học sẽ bắt đầu sau {timeRemaining} ngày nữa, vào lúc {courseStartTime}."
          description="Thông báo khi thời gian bắt đầu khóa học còn dưới 1 ngày."
          values={{
            courseStartDate: formatDate(startDate),
            timeRemaining,
          }}
        />

      </Alert>
    );
  }
  console.log('timeRemaining', timeRemaining);

  return (
    <Alert variant="info" icon={Info}>
      <strong>
        <FormattedMessage
          id="learning.outline.alert.start.long"
          defaultMessage="Khóa học sẽ bắt đầu sau {timeRemaining} ngày nữa, vào ngày {courseStartDate}."
          description="Thông báo khi thời gian bắt đầu khóa học còn nhiều hơn một ngày."
          values={{
            courseStartDate: formatDate(startDate),
            timeRemaining,
          }}
        />
      </strong>
      <br />
      <FormattedMessage
        id="learning.outline.alert.start.calendar"
        defaultMessage="Đừng quên đặt nhắc nhở trên lịch!"
        description="Khuyến nghị học viên đặt nhắc nhở cho ngày bắt đầu khóa học, hiển thị khi thời gian bắt đầu còn hơn 1 ngày."
      />
    </Alert>
  );
};

CourseStartAlert.propTypes = {
  payload: PropTypes.shape({
    courseId: PropTypes.string,
  }).isRequired,
};

export default CourseStartAlert;
