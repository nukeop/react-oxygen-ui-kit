import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Paragraph = props => {
  return (
    <div
      className={classnames("oxygen paragraph", {"inverted": props.inverted})}
    >
      {props.children}
    </div>
  );
}

export default Paragraph;
