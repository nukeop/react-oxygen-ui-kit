import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Well = props => {
  return (
    <div
      className={classnames(
	"oxygen well",
	{'small': props.small},
	{'large': props.large}
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

Well.propTypes = {
  style: PropTypes.object,
  small: PropTypes.bool,
  large: PropTypes.bool
};

export default Well;
