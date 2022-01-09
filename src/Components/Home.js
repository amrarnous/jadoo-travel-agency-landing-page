import React from "react";
import styled from "styled-components";
import BookDestination from "./Home/BookDestination";
import Categories from "./Home/Categories";
import Destinations from "./Home/Destinations";
import Testimonial from "./Home/Testimonial";
import Header from "./Home/Header";
import Clients from "./Home/Clients";
import SubscripeNewsletter from "./Home/SubscriptNewsletter";
import Footer from "./Common/Footer";
function Home() {
  return (
    <HomeContainer>
      <Header />
      <Categories />
      <Destinations />
      <BookDestination />
      <Testimonial />
      <Clients />
      <SubscripeNewsletter />
      <Footer />
    </HomeContainer>
  );
}
const HomeContainer = styled.div``;

export default Home;
