import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import ContentSegment from "../components/ContentSegment";


const homepage = () => {
  return (
    <>
      <Navbar />
      <ContentSegment id="businessInfo">
        <Header size="huge" textAlign="center">Amp-bitious Lock Smith</Header>
        
      </ContentSegment>
      <ContentSegment id="reviews" showDivider={true}>
        This is the reviews section
      </ContentSegment>
      <ContentSegment id="contactInfo">
        <Header size="large" textAlign="center">Contact Us</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
              (323) 765 4321
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              More text
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </ContentSegment>
    </>
  );
};

export default homepage;