import React from 'react';
import { Button, Card } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import { useSelector } from 'react-redux';
import { sendTrackingLogEvent } from '@edx/frontend-platform/analytics';
import messages from '../messages';
import { useModel } from '../../../generic/model-store';

const ButtonResumeCourse = () => {
    const intl = useIntl();
    const {
        courseId,
    } = useSelector(state => state.courseHome);

    const {
        org,
    } = useModel('courseHomeMeta', courseId);

    const eventProperties = {
        org_key: org,
        courserun_key: courseId,
    };

    const {
        resumeCourse: {
            hasVisitedCourse,
            url: resumeCourseUrl,
        },
    } = useModel('outline', courseId);

    if (!resumeCourseUrl) {
        return null;
    }

    const logResumeCourseClick = () => {
        sendTrackingLogEvent('edx.course.home.resume_course.clicked', {
            ...eventProperties,
            event_type: hasVisitedCourse ? 'resume' : 'start',
            url: resumeCourseUrl,
        });
    };

    return (
        <div>
            <Button
                variant="link"
                className='custom-explore-btn'
                block
                href={resumeCourseUrl}
                onClick={() => logResumeCourseClick()}
            >
                {hasVisitedCourse ? intl.formatMessage(messages.resume) : intl.formatMessage(messages.start)}
            </Button>
        </div>
    );
};

export default ButtonResumeCourse;
