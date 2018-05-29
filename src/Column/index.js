import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Column = props => {
  return (
    <div className="oxygen column">
      {props.children}
    </div>
  );
}

Column.propTypes = {

};

export default Column;
