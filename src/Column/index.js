import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Column = props => {
  return (
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
}

Column.propTypes = {
  style: PropTypes.object,
  grow: PropTypes.number,
  shrink: PropTypes.number
};

export default Column;
