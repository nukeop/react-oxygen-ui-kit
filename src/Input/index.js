import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Input = props => (
  <input
    style={props.style}
    className={
      classnames(
        'oxygen input',
        { border: props.border },
        { attachLeft: props.attach === 'left' },
        { attachRight: props.attach === 'right' },
        { attachMid: props.attach === 'mid' },
        props.className
      )
    }
    type="text"
  />
);

Input.propTypes = {
  border: PropTypes.bool,
  attach: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

Input.defaultProps = {
  border: false,
  attach: '',
  style: {},
  className: ''
};

export default Input;
