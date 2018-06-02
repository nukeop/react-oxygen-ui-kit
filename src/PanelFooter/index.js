import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const PanelFooter = props => (
  <div className="oxygen panel-footer">
    {props.children}
  </div>
);

PanelFooter.propTypes = {
  children: PropTypes.node,
};

PanelFooter.defaultProps = {
  children: null
};

export default PanelFooter;
