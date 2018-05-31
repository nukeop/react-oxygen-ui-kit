import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const SidebarContent = props => {
    return (
      <div
	className="oxygen sidebar-content"
      >
	{props.children}
      </div>      
    );
}

SidebarContent.propTypes = {

};

export default SidebarContent;
