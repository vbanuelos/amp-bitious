import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";
import styled from "styled-components";

const WhiteMenuItemStyle = {
  fontSize: "1.5em",
  color: "white",
  paddingRight: 0
};

const HeaderMenuItemStyle = { 
  paddingLeft: 0,
  fontSize: "2em",
  color: "white"
};

const TelLink = styled.a`
  color: white;

  &:hover {
    color: white;
    text-underline: none;
  }
`;

const Navbar = () => {
  return (
    <Menu style={{ backgroundColor: 'black', color: "white", borderRadius: 0}}>
      <Container>
        <Menu.Item header style={HeaderMenuItemStyle}>Amp-bitious</Menu.Item>
        <Menu.Item style={WhiteMenuItemStyle} position="right">
          <TelLink href="tel:3232435319">
            <Icon flipped="horizontally" name="phone" />
            <span>Call Now</span>
          </TelLink>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;