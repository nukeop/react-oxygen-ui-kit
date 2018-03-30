import React from 'react';

import styles from './styles.scss';

const Paragraph = props => {
  return (
    <div className="oxygen paragraph">
      {props.children}
    </div>
  );
}

export default Paragraph;
