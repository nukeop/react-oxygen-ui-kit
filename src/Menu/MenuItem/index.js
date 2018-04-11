import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const MenuItem = props => {
  return (
    <div
      style={props.style}
      className={
        classnames(
          "oxygen menu-item",
          {"item-button": props.button},
          props.className
        )
      }
    >
      {props.children}
    </div>
  );
}

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  button: PropTypes.bool
};

export default MenuItem;
