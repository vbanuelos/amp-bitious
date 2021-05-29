import React from "react";
import { Divider, Container, Segment } from "semantic-ui-react";

const ContentSegment = (props) => {
  return (
    <Segment basic>
      <Container>
        {props.children}
        {props.showDivider && <Divider section/>}
      </Container>
    </Segment>
  ) 
};

export default ContentSegment;