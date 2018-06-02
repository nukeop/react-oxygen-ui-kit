import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Row = props => (
  <div
    className="oxygen row"
    style={Object.assign({}, props.style, {
        flexGrow: props.grow || 0,
        flexShrink: props.shrink || 0
      })}
  >
    {props.children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  grow: PropTypes.number,
  shrink: PropTypes.number
};

Row.defaultProps = {
  children: null,
  style: {},
  grow: 0,
  shrink: 0
};

export default Row;
