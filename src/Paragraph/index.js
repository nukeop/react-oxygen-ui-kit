import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Paragraph = props => {
  return (
    <div
      className={
        classnames(
          "oxygen paragraph",
          {"inverted": props.inverted},
          {"fluid": props.fluid}
        )
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
}

Paragraph.propTypes = {
  inverted: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Paragraph;
