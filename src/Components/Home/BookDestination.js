import React from "react";
import {
  BookDestinationContainer,
  BookDestinationPhoto,
  BookDestinationContent,
  BookDestinationBox,
  BookFeatures,
  Feature,
  FeatureIcon,
  FeatureContent,
} from "./BookDestination.style";
import { Container } from "../Base/Container.style";
import SectionTitle from "./SectionTitle";
function BookDestination() {
  return (
    <BookDestinationContainer>
      <Container>
        <BookDestinationBox>
          <BookDestinationContent>
            <SectionTitle
              Title="Easy and Fast"
              Description="Book Your Next Trip 
In 3 Easy Steps"
              className="title-container"
            />
            <BookFeatures>
              <Feature>
                <FeatureIcon>
                  <img src="./imgs/book-choose.svg" alt="" />
                </FeatureIcon>
                <FeatureContent>
                  <h2>Choose Destination</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </FeatureContent>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <img src="./imgs/book-payment.svg" alt="" />
                </FeatureIcon>
                <FeatureContent>
                  <h2>Make Payment</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </FeatureContent>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <img src="./imgs/book-date.svg" alt="" />
                </FeatureIcon>
                <FeatureContent>
                  <h2>Reach Airport on Selected Date</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </FeatureContent>
              </Feature>
            </BookFeatures>
          </BookDestinationContent>
          <BookDestinationPhoto>
            <img src="./imgs/book-next-trip.png" className="img-fluid" alt="" />
          </BookDestinationPhoto>
        </BookDestinationBox>
      </Container>
    </BookDestinationContainer>
  );
}

export default BookDestination;
