import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Panel = props => {
  return (
    <div
      style={props.style}
      className={
        classnames(
          "oxygen panel",
          {"fluid": props.fluid},
	  {"dark": props.dark},
          props.className
        )
      }
    >
      {props.children}
    </div>
  );
}

Panel.propTypes = {
  fluid: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Panel;
