import React from 'react';

import styles from './styles.scss';

const PanelFooter = props => {
  return (
    <div className="oxygen panel-footer">
      {props.children}
    </div>
  );
}

export default PanelFooter;
