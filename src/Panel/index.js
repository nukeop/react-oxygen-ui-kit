import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Panel = props => (
  <div
    style={props.style}
    className={
        classnames(
          'oxygen panel',
          { fluid: props.fluid },
          { dark: props.dark },
          props.className
        )
      }
  >
    {props.children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Panel.defaultProps = {
  children: null,
  fluid: false,
  dark: false,
  className: '',
  style: {}
};

export default Panel;
