import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Panel from '../Panel';

import styles from './styles.scss';

const Menu = props => {
  return (
    <Panel
      className={
        classnames(
          "menu",
          {"small": props.small},
          {"big": props.big}
        )
      }
    >
      {props.children}
    </Panel>
  );
}

Menu.propTypes = {
  small: PropTypes.bool,
  big: PropTypes.bool
};

export default Menu;
