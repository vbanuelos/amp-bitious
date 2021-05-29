import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import ContentSegment from "../components/ContentSegment";

const hours = [
  { date: "Monday:",     hours: "9:00am - 7:00pm" },
  { date: "Tuesday:",    hours: "9:00am - 7:00pm" },
  { date: "Wednesday:",  hours: "9:00am - 7:00pm" },
  { date: "Thursday:",   hours: "9:00am - 7:00pm" },
  { date: "Friday:",     hours: "9:00am - 7:00pm" },
  { date: "Saturday:",   hours: "10:00am - 3:00pm" },
  { date: "Friday:",     hours: "10:00am - 3:00pm" },
];

const dataToGrid = (leftData, rightData) => {
  return (
    <Grid.Row style={{padding: ".5em 0"}}>
      <Grid.Column width="8" textAlign='right'><strong>{leftData}</strong></Grid.Column>
      <Grid.Column width="8" textAlign='left'>{rightData}</Grid.Column>
    </Grid.Row>
  );
};

const openTill = () => {
  const today = new Date();
  let day = today.getDay();

  if (day < 6) { return "7pm"}
  else { return "3pm" }
}

const homepage = () => {
  return (
    <>
      <Navbar />
      <ContentSegment id="businessInfo">
        <Header size="huge" textAlign="center" style={{ marginBottom: ".15em" }}>Amp-bitious Lock Smith</Header>
        <Header size="large" textAlign="center" style={{ marginTop: 0 }}>Open today until {openTill()}</Header>
      </ContentSegment>
      <ContentSegment id="image" showDivider={true}>
        add image
      </ContentSegment>
      <ContentSegment id="reviews" showDivider={true}>
        add yelp reviews
      </ContentSegment>
      <ContentSegment id="gallery" showDivider={true}>
        add gallery
      </ContentSegment>
      <ContentSegment id="contactInfo">
        <Header size="large" textAlign="center" style={{ marginBottom: "2em" }}>Business Info</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="16" textAlign="center" style={{paddingLeft: "2em"}}><h3>Contact Info:</h3></Grid.Column>
                </Grid.Row>
                {dataToGrid("Cell Phone", "(323) 765 - 4321")}
                {dataToGrid("Email", "someEmail@gmail.com")}
              </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Row >
                  <Grid.Column width="16" textAlign="center" style={{paddingLeft: "3em"}}><h3>Business Hours:</h3></Grid.Column>
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

export default homepage;