import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const renderStars = score => {
  let result = [];

  for(var i=0; i<score; i++) {
    result.push(
      <div className="star">★</div>
    );
  }

  for(var i=0; i<5 - score; i++) {
    result.push(
      <div className="star">☆</div>
    );
  }
  
  return result;
};

const Rating = props => {
  return (
    <div className={classnames(
	   "oxygen rating",
	   {'show-score': props.showScore}
	 )}>

      {
	props.showScore &&
	  <div className={classnames(
		 "score",
		 {'red': props.red}, 
		 {'orange': props.orange}, 
		 {'yellow': props.yellow}, 
		 {'green': props.green}, 
		 )}>
	      {props.score}
	  </div>
      }

      <div className="stars-container">
	{
	  renderStars(props.stars)
	}
      </div>
      
      
    </div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  score: PropTypes.string,
  showScore: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  orange: PropTypes.bool,
  red: PropTypes.bool
};

export default Rating;
