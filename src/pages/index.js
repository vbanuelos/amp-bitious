import React from "react";
import { graphql } from "gatsby";
import { Grid, Header, Image,  Card } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import ContentSegment from "../components/ContentSegment";
import YelpReview from "../components/YelpReview";
import heroImg from "/src/images/banner-commercial.jpg";
import adrianImg from "/src/images/adrian2.jpg";
import { ratingToStars } from "../helpers"

const heroDivStyle = {
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  height: "20em"
};

const hours = [
  { date: "Monday:",     hours: "9:00am - 7:00pm" },
  { date: "Tuesday:",    hours: "9:00am - 7:00pm" },
  { date: "Wednesday:",  hours: "9:00am - 7:00pm" },
  { date: "Thursday:",   hours: "9:00am - 7:00pm" },
  { date: "Friday:",     hours: "9:00am - 7:00pm" },
  { date: "Saturday:",   hours: "10:00am - 3:00pm" },
  { date: "Sunday:",     hours: "10:00am - 3:00pm" },
];

const dataToGrid = (leftData, rightData) => {
  return (
    <Grid.Row key={leftData} style={{padding: ".5em 0"}}>
      <Grid.Column width="8" textAlign='center'><strong>{leftData}</strong></Grid.Column>
      <Grid.Column width="8" textAlign='center'>{rightData}</Grid.Column>
    </Grid.Row>
  );
};

const openTill = () => {
  const today = new Date();
  let day = today.getDay();

  if (day < 6) { return "7pm"}
  else { return "3pm" }
}

const index = ({data}) => {
  console.log(data)
  return (
    <>
      <Navbar />
      <ContentSegment id="businessInfo">
        <Header size="huge" textAlign="center" style={{ marginBottom: ".15em" }}>Amp-bitious Lock Smith</Header>
        <Header size="large" textAlign="center" style={{ marginTop: 0 }}>Open today until {openTill()}</Header>
      </ContentSegment>
      <ContentSegment id="image" showDivider={true}>
        <div style={heroDivStyle}>
          <Image
            alt="Adrian"
            src={adrianImg}
            size='medium'
            circular
            style={{ width: "250px", float: "right", position: "relative", top: "1.25em", right: "1.25em" }}
            verticalAlign="middle"
          />
        </div>
      </ContentSegment>
      <ContentSegment id="reviews" showDivider={true}>
        <Header as="h1">Reviews</Header>
        
        <div>Yelp Rating {ratingToStars(data.yelpBusinessDetails.rating)}</div>
        <div><a href={data.yelpBusinessDetails.url}>Yelp Page</a></div>

        <Card.Group>
          {data.allYelpBusinessReview.nodes.map(review => YelpReview(review))}
        </Card.Group>
      </ContentSegment>
      <ContentSegment id="gallery" showDivider={true}>
        add gallery
      </ContentSegment>
      <ContentSegment id="contactInfo">
        <Header size="large" textAlign="center" style={{ marginBottom: "2em" }}>Business Info</Header>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="16" textAlign="center"><h3>Contact Info:</h3></Grid.Column>
                </Grid.Row>
                {dataToGrid("Cell Phone", "(323) 765 - 4321")}
                {dataToGrid("Email", "someEmail@gmail.com")}
              </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Row >
                  <Grid.Column width="16" textAlign="center"><h3>Business Hours:</h3></Grid.Column>
                </Grid.Row>
                { hours.map(h => dataToGrid(h.date, h.hours)) }
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </ContentSegment>
    </>
  );
};

export const query = graphql`
  query indexQuery {
    yelpBusinessDetails {
      name
      rating
      review_count
      url
      phone
      photos
    }
    allYelpBusinessReview {
      nodes {
        id
        text
        rating
        user {
          name
          profile_url
        }
      }
    }
  }
`;

export default index;