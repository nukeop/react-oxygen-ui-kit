import React from 'react';

import styles from './styles.scss';

class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      image,
      color1,
      color2
    } = this.props;

    let overlayStyle = color1 && color2
    ? {background: `linear-gradient(135deg, ${color1} 10%, ${color2} 100%)`}
    : null;

    return (
      <div className='oxygen background'>
        <div className='bg-image' style={{backgroundImage: `url(${image})`}}></div>
        <div className='bg-overlay' style={overlayStyle}></div>
        {this.props.children}
      </div>
    );
  }
}

export default Background;
