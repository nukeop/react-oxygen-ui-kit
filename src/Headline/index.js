import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Headline = props => {
  return (
    <div
      className={classnames("oxygen headline")}
      >
      {props.children}
    </div>
  );
}

export default Headline;
