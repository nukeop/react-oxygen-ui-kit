import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Panel = props => {
  return (
    <div
      style={props.style}
      className={classnames("oxygen panel", {"fluid": props.fluid})}
    >
      {props.children}
    </div>
  );
}

export default Panel;
