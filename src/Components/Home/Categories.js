import React from "react";
import {
  CategoriesContainer,
  CategoriesBox,
  Category,
} from "./Categories.style";
import SectionTitle from "./SectionTitle";
import { Container } from "../Base/Container.style";
function Categories() {
  return (
    <CategoriesContainer>
      <SectionTitle Title="Category" Description="We Offer Best Services" />
      <Container>
        <CategoriesBox>
          <Category>
            <div>
              <img src="/imgs/calc-weather.png" />
            </div>
            <h1>Calculated Weather </h1>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </Category>
          <Category>
            <div>
              <img src="/imgs/best-flights.png" />
            </div>
            <h1>Best Flights</h1>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </Category>
          <Category>
            <div>
              <img src="/imgs/local-events.png" />
            </div>
            <h1>Local Events</h1>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </Category>
          <Category>
            <div>
              <img src="/imgs/cutomization.png" />
            </div>
            <h1>Customization</h1>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </Category>
        </CategoriesBox>
      </Container>
    </CategoriesContainer>
  );
}

export default Categories;
