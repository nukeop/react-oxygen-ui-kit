import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Well = props => (
  <div
    className={classnames(
      'oxygen well',
      { small: props.small },
      { large: props.large }
    )}
    style={props.style}
  >
    {props.children}
  </div>
);

Well.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  small: PropTypes.bool,
  large: PropTypes.bool
};

Well.defaultProps = {
  children: null,
  style: {},
  small: false,
  large: false
};

export default Well;
