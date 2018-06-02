import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Button = props => (
  <button
    className={
        classnames(
          'oxygen button',
          { teal: props.teal },
          { green: props.green },
          { blue: props.blue },
          { purple: props.purple },
          { black: props.black },
          { orange: props.orange },
          { 'dark-orange': props.darkOrange },
          { red: props.red },
          { fluid: props.fluid },
          { inverted: props.inverted },
          { attachLeft: props.attach === 'left' },
          { attachRight: props.attach === 'right' },
          { attachMid: props.attach === 'mid' }
        )
      }
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  teal: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  purple: PropTypes.bool,
  black: PropTypes.bool,
  orange: PropTypes.bool,
  darkOrange: PropTypes.bool,
  red: PropTypes.bool,
  fluid: PropTypes.bool,
  inverted: PropTypes.bool,
  attach: PropTypes.string
};

Button.defaultProps = {
  children: null,
  teal: false,
  green: false,
  blue: false,
  purple: false,
  black: false,
  orange: false,
  darkOrange: false,
  red: false,
  fluid: false,
  inverted: false,
  attach: ''
};

export default Button;
