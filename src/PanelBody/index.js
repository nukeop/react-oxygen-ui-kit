import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const PanelBody = props => (
  <div
    className={
      classnames(
        props.className,
        'oxygen panel-body',
        { row: props.row }
      )
    }
    style={props.style}
  >
    {props.children}
  </div>
);

PanelBody.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

PanelBody.defaultProps = {
  children: null,
  row: false,
  className: '',
  style: {}
};

export default PanelBody;
