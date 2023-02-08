import React from 'react';
import './rating.scss';

import redstar from "../../../assets/redStar.png";
import greystar from "../../../assets/greyStar.png";

function Rating ({rating}) {

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
          {/* Loop to display star by rating */}
          {stars.map((star) =>
            rating >= star ? (
              <img
                key={star.toString()}
                className="rating_star"
                src={redstar}
                alt=""
              />
            ) : (
              <img
                key={star.toString()}
                className="rating_star"
                src={greystar}
                alt=""
              />
            )
          )}
        </div>
      );
}

export default Rating;