import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Container = props => {
  return (
    <div
      className={
	classnames(
	  "oxygen container",
	  {'narrow': props.narrow}
	)
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
}

Container.propTypes = {
  style: PropTypes.object,
  narrow: PropTypes.bool
};

export default Container;
