import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Panel from '../Panel';

import './styles.scss';

const Menu = props => (
  <Panel
    className={
      classnames(
        'menu',
        { small: props.small },
        { big: props.big },
        { fluid: props.fluid }
      )
    }
  >
    {props.children}
  </Panel>
);

Menu.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
  big: PropTypes.bool,
  fluid: PropTypes.bool
};

Menu.defaultProps = {
  children: null,
  small: false,
  big: false,
  fluid: false
};

export default Menu;
