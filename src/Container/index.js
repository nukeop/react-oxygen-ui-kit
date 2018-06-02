import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Container = props => (
  <div
    className={
      classnames(
        'oxygen container',
        { narrow: props.narrow }
      )
    }
    style={props.style}
  >
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  narrow: PropTypes.bool
};

Container.defaultProps = {
  children: null,
  style: {},
  narrow: false
};

export default Container;
