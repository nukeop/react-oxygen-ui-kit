import React from 'react';

import styles from './styles.scss';

const PanelHeader = props => {
  return (
    <div className="oxygen panel-header">
      {props.children}
    </div>
  );
}

export default PanelHeader;
