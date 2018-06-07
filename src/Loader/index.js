import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Loader = props => (
  <div className={classnames('loader', props.type)}>
    <span />
    <span />
    <span />
    <span />
  </div>
);

Loader.propTypes = {
  type: PropTypes.string
};

Loader.defaultProps = {
  type: 'loader1'
};

export default Loader;
