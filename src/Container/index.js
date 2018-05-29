import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Container = props => {
  return (
    <div className="oxygen container">
      {props.children}
    </div>
  );
}

Container.propTypes = {

};

export default Container;
