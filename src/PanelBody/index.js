import React from 'react';

import styles from './styles.scss';

const PanelBody = props => {
  return (
    <div className="oxygen panel-body">
      {props.children}
    </div>
  );
}

export default PanelBody;
