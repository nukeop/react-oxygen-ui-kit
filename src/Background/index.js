import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      image,
      color1,
      color2,
      centered,
      noGradient,
      colored
    } = this.props;

    let bgImageStyle = {};
    bgImageStyle.backgroundImage = `url(${image})`;
    centered ? bgImageStyle.backgroundPosition = 'center center' : null;
    colored? bgImageStyle.filter = 'grayscale(0)' : null;

    let overlayStyle = {};
    color1 && color2
    ? overlayStyle.background = `linear-gradient(135deg, ${color1} 10%, ${color2} 100%)`
    : null;
    noGradient ? overlayStyle.background = 'transparent' : null;

    return (
      <div className='oxygen background'>
        <div className='bg-image' style={bgImageStyle}></div>
        <div className='bg-overlay' style={overlayStyle}></div>
        {this.props.children}
      </div>
    );
  }
}

Background.propTypes = {
  image: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  centered: PropTypes.bool,
  noGradient: PropTypes.bool,
  colored: PropTypes.bool
};

export default Background;
