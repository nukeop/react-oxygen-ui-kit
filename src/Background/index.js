import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Background = props => {
  const {
    image,
    color1,
    color2,
    centered,
    noGradient,
    colored,
    className,
    style
  } = props;

  const bgImageStyle = {};
  bgImageStyle.backgroundImage = `url(${image})`;
  bgImageStyle.backgroundPosition = centered ? 'center center' : null;
  bgImageStyle.filter = colored ? 'grayscale(0)' : null;

  const overlayStyle = {};
  overlayStyle.background = color1 && color2
    ? `linear-gradient(135deg, ${color1} 10%, ${color2} 100%)`
    : null;
  overlayStyle.background = noGradient ? 'transparent' : overlayStyle.background;

  console.log(overlayStyle);
  
  return (
    <div
      className={
        classnames(
          'oxygen background',
          className
        )
      }
      style={style}
    >
      <div className="bg-image" style={bgImageStyle} />
      <div className="bg-overlay" style={overlayStyle} />
      {props.children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  centered: PropTypes.bool,
  noGradient: PropTypes.bool,
  colored: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Background.defaultProps = {
  children: null,
  image: '',
  color1: null,
  color2: null,
  centered: false,
  noGradient: false,
  colored: false,
  className: null,
  style: {}
};

export default Background;
