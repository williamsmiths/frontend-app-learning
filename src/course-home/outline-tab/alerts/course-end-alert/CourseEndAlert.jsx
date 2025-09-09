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
import { useFormatDate } from './hooks';

const DAY_SEC = 24 * 60 * 60; // in seconds
const DAY_MS = DAY_SEC * 1000; // in ms
const YEAR_SEC = 365 * DAY_SEC; // in seconds
const formatDate = useFormatDate();

const CourseEndAlert = ({ payload }) => {
  const {
    description,
    endDate,
    userTimezone,
  } = payload;

  const timezoneFormatArgs = userTimezone ? { timeZone: userTimezone } : {};

  let msg;
  const delta = new Date(endDate) - new Date();
  const timeRemaining = Math.ceil(delta / (1000 * 60 * 60 * 24));

  if (delta < DAY_MS) {
    const courseEndTime = formatDate(endDate);
    msg = (
      <FormattedMessage
        id="learning.outline.alert.end.short"
        defaultMessage="Khoá học này sẽ kết thúc sau {timeRemaining} ngày nữa, vào lúc {courseEndTime}."
        description="Used when the time remaining is less than a day away."
        values={{
          courseEndTime,
          timeRemaining,
        }}
      />
    );
  } else {
    const courseEndDate = formatDate(endDate);
    msg = (
      <FormattedMessage
        id="learning.outline.alert.end.long"
        defaultMessage="Khoá học này sẽ kết thúc sau {timeRemaining} ngày nữa, vào {courseEndDate}."
        description="Used when the time remaining is more than a day away."
        values={{
          courseEndDate,
          timeRemaining,
        }}
      />
    );
  }

  return (
    <Alert variant="info" icon={Info}>
      <strong>{msg}</strong><br />
      {description}
    </Alert>
  );
};

CourseEndAlert.propTypes = {
  payload: PropTypes.shape({
    description: PropTypes.string,
    endDate: PropTypes.string,
    userTimezone: PropTypes.string,
  }).isRequired,
};

export default CourseEndAlert;
