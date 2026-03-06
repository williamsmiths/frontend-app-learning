import { useIntl } from '@edx/frontend-platform/i18n';

import CompletionDonutChart from './CompletionDonutChart';
import messages from './messages';

const CourseCompletion = () => {
  const intl = useIntl();

  return (
    <section className="text-dark-700 mb-4 rounded raised-card p-4">
      <div className="row w-100 m-0">
        <div className="col-12 col-sm-6 col-md-7 p-0">
          <div className='mb-6'>
            <h3 className='fw-bold text-primary-red'>{intl.formatMessage(messages.courseCompletion)}</h3>
            <p className="small text-muted mb-0">
              {intl.formatMessage(messages.completionBody)}
            </p>
          </div>
          <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
            <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
              <span
                className="rounded-circle bg-primary-red"
                style={{
                  width: '12px',
                  height: '12px',
                }}
              ></span>
              Completed
            </div>
            <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
              <span
                className="rounded-circle bg-gray-200"
                style={{
                  width: '12px',
                  height: '12px',
                }}
              ></span>
              Not completed
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-6 col-md-5 mt-sm-n3 p-0 text-center">
          <CompletionDonutChart />
        </div>
      </div>
    </section>
  );
};

export default CourseCompletion;
