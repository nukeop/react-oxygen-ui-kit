import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const SidebarEntry = props => {
  return (
    <div
      className="oxygen sidebar-entry"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

SidebarEntry.propTypes = {
  onClick: PropTypes.func
};

export default SidebarEntry;
