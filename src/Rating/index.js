import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const renderStars = score => {
  const result = [];

  for (let i = 0; i < score; i++) {
    result.push(<div className="star">★</div>);
  }

  for (let i = 0; i < 5 - score; i++) {
    result.push(<div className="star">☆</div>);
  }

  return result;
};

const Rating = props => (
  <div className={classnames(
         'oxygen rating',
         { 'show-score': props.showScore }
       )}
  >

    {
      props.showScore &&
        <div className={classnames(
               'score',
               { red: props.red },
               { orange: props.orange },
               { yellow: props.yellow },
               { green: props.green },
               )}
        >
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

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  score: PropTypes.string,
  showScore: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  orange: PropTypes.bool,
  red: PropTypes.bool
};

Rating.defaultProps = {
  score: '0',
  showScore: false,
  green: false,
  yellow: false,
  orange: false,
  red: false
};

export default Rating;
