import React from 'react';
import { Icon } from 'semantic-ui-react';

const ratingToStars = (rating) => {
  let starArray = [];
  const ratingFloor = Math.floor(rating);
  const ratingCeil = Math.ceil(rating);
  const emptyStars = 5 - ratingCeil;
  
  for (let i = 0; i < ratingFloor; i++) {
    starArray.push(<Icon name="star" color='yellow' />);
  }

  if (ratingFloor !== ratingCeil) {
    starArray.push(
      <Icon.Group size="medium">
        <Icon name="star outline " color='yellow' />
        <Icon name="star half" color='yellow' style={{ left: "41%" }} />
      </Icon.Group>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    starArray.push(<Icon name="star outline" color='yellow' />);
  }

  return starArray;
};

export { ratingToStars };