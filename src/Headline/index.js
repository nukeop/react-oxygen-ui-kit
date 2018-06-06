import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Headline = props => (
  <div
    style={props.style}
    className={classnames(
       'oxygen headline',
       props.className,
       { inverted: props.inverted }
     )}
  >
    {props.children}
  </div>
);

Headline.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
};

Headline.defaultProps = {
  children: null,
  inverted: false,
  style: {},
  className: ''
};

export default Headline;
