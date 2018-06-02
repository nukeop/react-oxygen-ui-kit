import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SidebarLabel = props => (
  <div className="oxygen sidebar-label">
    {props.children}
  </div>
);

SidebarLabel.propTypes = {
  children: PropTypes.node
};

SidebarLabel.defaultProps = {
  children: null
};

export default SidebarLabel;
