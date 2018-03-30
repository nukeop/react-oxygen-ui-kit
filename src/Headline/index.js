import React from 'react';

import styles from './styles.scss';

const Headline = props => {
  return (
    <div className="oxygen headline">
      {props.children}
    </div>
  );
}

export default Headline;
