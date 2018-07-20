import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Paragraph = props => (
  <div
    className={
      classnames(
        'oxygen paragraph',
        props.className,
        { inverted: props.inverted },
        { fluid: props.fluid }
      )
    }
    style={props.style}
  >
    {props.children}
  </div>
);

Paragraph.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Paragraph.defaultProps = {
  children: null,
  inverted: false,
  fluid: false,
  className: '',
  style: {}
};

export default Paragraph;
