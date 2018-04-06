import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


const Loader = props => {
  return (
    <div className={classnames("loader", props.type)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Loader;
