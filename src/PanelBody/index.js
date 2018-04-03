import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const PanelBody = props => {
  return (
    <div
      className={
        classnames(
          "oxygen panel-body",
          {"row": props.row}
        )
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
}

PanelBody.propTypes = {
  row: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default PanelBody;
