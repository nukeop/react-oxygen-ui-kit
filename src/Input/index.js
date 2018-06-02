import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Input = props => (
  <input
    className={
        classnames(
          'oxygen input',
          { border: props.border },
          { attachLeft: props.attach === 'left' },
          { attachRight: props.attach === 'right' },
          { attachMid: props.attach === 'mid' }
        )
      }
    type="text"
  />
);

Input.propTypes = {
  border: PropTypes.bool,
  attach: PropTypes.string
};

Input.defaultProps = {
  border: false,
  attach: ''
};

export default Input;
