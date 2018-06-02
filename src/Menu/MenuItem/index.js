import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const MenuItem = props => (
  <div
    style={props.style}
    className={
        classnames(
          'oxygen menu-item',
          { 'item-button': props.button },
          props.className
        )
      }
  >
    {props.children}
  </div>
);

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  button: PropTypes.bool
};

MenuItem.defaultProps = {
  className: '',
  style: {},
  button: false
};

export default MenuItem;
