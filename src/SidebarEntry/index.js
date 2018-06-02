import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SidebarEntry = props => (
  <div
    className="oxygen sidebar-entry"
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

SidebarEntry.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

SidebarEntry.defaultProps = {
  children: null,
  onClick: null
};

export default SidebarEntry;
