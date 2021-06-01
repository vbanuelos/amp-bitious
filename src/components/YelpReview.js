import React from "react";
import { Card } from "semantic-ui-react";
import { ratingToStars } from "../helpers"

const YelpReview = (data) => {
  return (
    <Card key={data.id}>
      <Card.Content>
        <Card.Header>{data.user.name}</Card.Header>
        <Card.Meta>{ratingToStars(data.rating)}</Card.Meta>
        <Card.Description>{data.text}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default YelpReview;

