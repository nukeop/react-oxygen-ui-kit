import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SidebarContent = props => (
  <div
    className="oxygen sidebar-content"
  >
    {props.children}
  </div>
);

SidebarContent.propTypes = {
  children: PropTypes.node
};

SidebarContent.defaultProps = {
  children: null
};

export default SidebarContent;
