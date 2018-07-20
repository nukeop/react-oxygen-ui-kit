import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const MenuItem = props => (
  <div
    style={props.style}
    className={classnames(
      'oxygen menu-item',
      { 'item-button': props.button },
      props.className
    )
    }
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  button: PropTypes.bool,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  className: '',
  style: {},
  button: false,
  onClick: null
};

export default MenuItem;
