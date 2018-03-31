import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Button = props => {
  return (
    <button
      className={
        classnames(
          "oxygen button",
          {'teal': props.teal},
          {'green': props.green},
          {'blue': props.blue},
          {'purple': props.purple},
          {'black': props.black},
          {'orange': props.orange},
          {'dark-orange': props.darkOrange},
          {'red': props.red},
          {'fluid': props.fluid}
        )
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
