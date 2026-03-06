import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Collapsible, IconButton } from '@openedx/paragon';
import { Minus, Plus } from '@openedx/paragon/icons';
import courseOutlineMessages from '@src/course-home/outline-tab/messages';
import { useCourseOutlineSidebar } from '../hooks';
import CompletionIcon from './CompletionIcon';
import SidebarUnit from './SidebarUnit';
import { UNIT_ICON_TYPES } from './UnitIcon';

const SidebarSequence = ({
  courseId,
  defaultOpen,
  sequence,
  activeUnitId,
}) => {
  const intl = useIntl();
  const {
    id,
    complete,
    title,
    specialExamInfo,
    unitIds,
    type,
    completionStat,
  } = sequence;

  const [open, setOpen] = useState(defaultOpen);
  const { activeSequenceId, units } = useCourseOutlineSidebar();
  const isActiveSequence = id === activeSequenceId;

  const sectionTitle = (
    <>
      <div className="col-auto p-0" style={{ fontSize: '1.1rem' }}>
        <CompletionIcon completionStat={completionStat} />
      </div>
      <div className="col-9 d-flex flex-column flex-grow-1 ml-3 mr-auto p-0 text-left">
        <span className="align-middle text-gray-700-500">{title}</span>
        {specialExamInfo && <span className="align-middle small text-muted">{specialExamInfo}</span>}
        <span className="sr-only">
          , {intl.formatMessage(complete
            ? courseOutlineMessages.completedAssignment
            : courseOutlineMessages.incompleteAssignment)}
        </span>
      </div>
    </>
  );

  return (
    <li className={classNames('course-sidebar-collapsible', { 'active-section': isActiveSequence, 'bg-info-100': isActiveSequence && !open })}>
      <Collapsible
        className="border-0"
        styling="card-lg text-break"
        title={sectionTitle}
        open={open}
        onToggle={() => setOpen(!open)}
        iconWhenClosed={(
          <IconButton
            alt={"Mở"}
            iconAs={Plus}
            onClick={() => { setOpen(true); }}
            size="sm"
            variant="light"
            className='custom-dropdown-toggle'
          />
        )}
        iconWhenOpen={(
          <IconButton
            alt={"Đóng"}
            iconAs={Minus}
            onClick={() => { setOpen(false); }}
            size="sm"
            variant="light"
            className='custom-dropdown-toggle'
          />
        )}
      >
        <ol className="list-unstyled">
          {unitIds.map((unitId, index) => (
            <SidebarUnit
              key={unitId}
              id={unitId}
              courseId={courseId}
              sequenceId={id}
              unit={units[unitId]}
              isActive={activeUnitId === unitId}
              activeUnitId={activeUnitId}
              isFirst={index === 0}
              isLocked={type === UNIT_ICON_TYPES.lock}
            />
          ))}
        </ol>
      </Collapsible>
    </li>
  );
};

SidebarSequence.propTypes = {
  courseId: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool.isRequired,
  sequence: PropTypes.shape({
    complete: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    specialExamInfo: PropTypes.string,
    unitIds: PropTypes.arrayOf(PropTypes.string),
    completionStat: PropTypes.shape({
      completed: PropTypes.number,
      total: PropTypes.number,
    }),
  }).isRequired,
  activeUnitId: PropTypes.string.isRequired,
};

export default SidebarSequence;
