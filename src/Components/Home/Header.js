import React from "react";
import { Button } from "../Base/Button.style";
import { Container } from "../Base/Container.style";
import {
  HeaderContainer,
  HeaderContent,
  HeaderButtons,
  HeaderButtonsPlayVideo,
  HeaderPhoto,
} from "./Header.style";
function Header() {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <h6>Best Destinations around the world</h6>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <HeaderButtons>
            <Button as="a" href="#" color="var(--orange)">
              Find out more
            </Button>
            <HeaderButtonsPlayVideo>
              <Button color="transparent">
                <img src="imgs/play-button.png" alt="play" />
                <span>Play a demo</span>
              </Button>
            </HeaderButtonsPlayVideo>
          </HeaderButtons>
        </HeaderContent>
        <HeaderPhoto>
          <img alt="header" src="./imgs/header.png" />
        </HeaderPhoto>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
