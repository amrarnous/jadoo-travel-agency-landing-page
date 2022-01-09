import React from "react";
import SectionTitle from "./SectionTitle";
import { Container } from "../Base/Container.style";
import {
  DestintaionContainer,
  Destination,
  DestinationBox,
  DestinationPhoto,
  DestinationDetails,
} from "./Destination.style";
function Destinations() {
  return (
    <DestintaionContainer>
      <SectionTitle Title="Top Selling" Description="Top Destinations" />
      <Container>
        <DestinationBox>
          <Destination>
            <DestinationPhoto>
              <img
                alt="d-1"
                src="https://images.pexels.com/photos/896755/pexels-photo-896755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </DestinationPhoto>
            <DestinationDetails>
              <span>Rome, Italty</span>
              <span>$5,42k</span>
              <span className="trip-duration">
                <img src="./imgs/navigation.svg" alt="" />
                <span>10 Days Trip</span>
              </span>
            </DestinationDetails>
          </Destination>
          <Destination>
            <DestinationPhoto>
              <img
                alt="d-1"
                src="https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </DestinationPhoto>
            <DestinationDetails>
              <span>London, UK</span>
              <span>$4.2k</span>
              <span className="trip-duration">
                <img src="./imgs/navigation.svg" alt="" />
                <span>12 Days Trip</span>
              </span>
            </DestinationDetails>
          </Destination>
          <Destination>
            <DestinationPhoto>
              <img
                alt="d-3"
                src="https://images.pexels.com/photos/705782/pexels-photo-705782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </DestinationPhoto>
            <DestinationDetails>
              <span>Full Europe</span>
              <span>$15k</span>
              <span className="trip-duration">
                <img src="./imgs/navigation.svg" alt="" />
                <span>28 Days Trip</span>
              </span>
            </DestinationDetails>
          </Destination>
        </DestinationBox>
      </Container>
    </DestintaionContainer>
  );
}

export default Destinations;
