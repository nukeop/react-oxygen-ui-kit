import React from 'react';

import styles from './styles.scss';

const Panel = props => {
  return (
    <div style={props.style} className="oxygen panel">
      {props.children}
    </div>
  );
}

export default Panel;
