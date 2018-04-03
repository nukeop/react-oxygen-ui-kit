import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Input = props => {
  return (
    <input
      className={
        classnames(
          "oxygen input",
          {"border": props.border},
          {'attachLeft': props.attach === 'left'},
          {'attachRight': props.attach === 'right'},
          {'attachMid': props.attach === 'mid'}
        )
      }
      type="text"
    />
  );
}

Input.propTypes = {
  border: PropTypes.bool,
  attach: PropTypes.string
};

export default Input;
