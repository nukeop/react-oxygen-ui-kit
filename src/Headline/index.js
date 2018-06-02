import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Headline = props => (
  <div
    className={classnames('oxygen headline')}
  >
    {props.children}
  </div>
);

Headline.propTypes = {
  children: PropTypes.node
};

Headline.defaultProps = {
  children: null
};

export default Headline;
