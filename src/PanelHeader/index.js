import React from 'react';

import styles from './styles.scss';

class PanelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {

    } = this.props;

    return (
      <div className="oxygen panel-header">
        {this.props.children}
      </div>
    );
  }
}

export default PanelHeader;
