import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const PanelHeader = props => (
  <div className="oxygen panel-header">
    {props.children}
  </div>
);

PanelHeader.propTypes = {
  children: PropTypes.node,
};

PanelHeader.defaultProps = {
  children: null
};

export default PanelHeader;
