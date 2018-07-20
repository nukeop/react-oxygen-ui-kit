import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Column = props => (
  <div
    className="oxygen column"
    style={Object.assign({}, props.style, {
      flexGrow: props.grow || 0,
      flexShrink: props.shrink || 0
    })}
  >
    {props.children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  grow: PropTypes.number,
  shrink: PropTypes.number
};

Column.defaultProps = {
  children: null,
  style: {},
  grow: 0,
  shrink: 0
};

export default Column;
