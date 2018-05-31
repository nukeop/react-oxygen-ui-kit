import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const SidebarLabel = props => {
  return (
    <div className="oxygen sidebar-label">
      {props.children}
    </div>
  );
}

SidebarLabel.propTypes = {

};

export default SidebarLabel;
