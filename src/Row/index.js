import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Row = props => {
  return (
    <div className="oxygen row">
      {props.children}
    </div>
  );
}

Row.propTypes = {

};

export default Row;
