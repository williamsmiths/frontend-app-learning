import { Button } from '@openedx/paragon';
import PropTypes from 'prop-types';
import React from 'react';

const SidebarTriggerBase = ({
  onClick,
  ariaLabel,
  children,
}) => (
  <Button
    className="trigger-base-btn d-flex align-items-center justify-content-center"
    variant='link'
    onClick={onClick}
    aria-label={ariaLabel}
  >
    <div className="icon-container d-flex position-relative align-items-center justify-content-center">
      {children}
    </div>
  </Button>

);

SidebarTriggerBase.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default SidebarTriggerBase;
