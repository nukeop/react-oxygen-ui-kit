import React from 'react';

import styles from './styles.scss';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      style
    } = this.props;

    return (
      <div style={style} className="oxygen panel">
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
