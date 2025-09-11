import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import { useSelector } from 'react-redux';

import { useModel } from '../../generic/model-store';

import messages from './messages';

const ProgressHeader = () => {
  const intl = useIntl();
  const {
    courseId,
    targetUserId,
  } = useSelector(state => state.courseHome);

  const { administrator, userId } = getAuthenticatedUser();

  const { studioUrl, username } = useModel('progress', courseId);

  const viewingOtherStudentsProgressPage = (targetUserId && targetUserId !== userId);

  const pageTitle = viewingOtherStudentsProgressPage
    ? intl.formatMessage(messages.progressHeaderForTargetUser, { username })
    : intl.formatMessage(messages.progressHeader);

  return (
    <div className="row w-100 m-0 mt-3 mb-4 justify-content-between">
      <h2 className='text-gray-700'>{pageTitle}</h2>
      {administrator && studioUrl && (
        <Button variant="outline" size="sm" className="align-self-center custom-outline-btn" style={{
          fontSize: '0.875rem',
          fontWeight: 'normal',
        }} href={studioUrl}>
          {intl.formatMessage(messages.studioLink)}
        </Button>
      )}
    </div>
  );
};

export default ProgressHeader;
