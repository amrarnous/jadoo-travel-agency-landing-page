import React, { useState } from "react";
import {
  TestimonialContainer,
  TestimonialSlider,
  TestimonialContent,
  TestimonialBox,
  SliderDots,
  Dot,
  Slide,
  SlideAvatar,
  SlideContent,
  SliderArrows,
  SliderArrowTop,
  SliderArrowBottom,
} from "./Testimonial.style";
import { Container } from "../Base/Container.style";
import SectionTitle from "./SectionTitle";
function Testimonial() {
  const [SliderContent, setSliderContent] = useState([
    {
      id: 1,
      photoURL: "./imgs/avatar.png",
      username: "Mike taylor",
      location: "Lahore, Pakistan",
      text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      active: false,
    },
    {
      id: 2,
      photoURL: "./imgs/avatar.png",
      username: "John Doe 1",
      location: "Lahore, Pakistan",
      text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      active: true,
    },
    {
      id: 3,
      photoURL: "./imgs/avatar.png",
      username: "John Doe 2",
      location: "Lahore, Pakistan",
      text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      active: false,
    },
  ]);
  const changeSliderItem = (SliderID) => {
    const slides = SliderContent;
    slides.map((slide) => {
      if (slide.id === SliderID) {
        slide.active = true;
        setSliderContent([...slides]);
      } else {
        slide.active = false;
        setSliderContent([...slides]);
      }
      return false;
    });
  };
  const showPrevItem = () => {
    const slides = SliderContent;
    slides.map((slide, index) => {
      if (slide.active && index > 0) {
        slides[index - 1].active = true;
        slide.active = false;
        setSliderContent([...slides]);
      }
      return false;
    });
  };
  const showNextItem = () => {
    const slides = SliderContent;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].active && i + 1 < slides.length) {
        slides[i + 1].active = true;
        slides[i].active = false;
        setSliderContent([...slides]);
        break;
      }
    }
  };
  return (
    <TestimonialContainer>
      <Container>
        <TestimonialBox>
          <TestimonialContent>
            <SectionTitle
              Title="Testimonials"
              Description="What People Say
About Us."
              className="title-container"
            />
            <SliderDots>
              {SliderContent.map((SliderDot) => (
                <Dot
                  key={SliderDot.id}
                  data-id={SliderDot.id}
                  onClick={() => changeSliderItem(SliderDot.id)}
                  className={SliderDot.active ? "active" : ""}
                ></Dot>
              ))}
            </SliderDots>
          </TestimonialContent>
          <TestimonialSlider>
            {SliderContent.map((slide) => (
              <Slide key={slide.id} className={slide.active ? "active" : ""}>
                <SlideAvatar>
                  <img src={slide.photoURL} alt="" />
                </SlideAvatar>
                <SlideContent>
                  <p>“{slide.text}”</p>
                  <h3>{slide.username}</h3>
                  <h4>{slide.location}</h4>
                </SlideContent>
              </Slide>
            ))}
            <SliderArrows>
              <SliderArrowTop onClick={() => showNextItem()}>
                <svg width="16.828" height="9.829" viewBox="0 0 16.828 9.829">
                  <path
                    id="arrow-top"
                    d="M0,7,7,0l7,7"
                    transform="translate(1.414 1.414)"
                    fill="none"
                    stroke="#bcb7c2"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </SliderArrowTop>
              <SliderArrowBottom onClick={() => showPrevItem()}>
                <svg width="16.828" height="9.829" viewBox="0 0 16.828 9.829">
                  <path
                    id="arrow-bottom"
                    d="M0-7,7,0l7-7"
                    transform="translate(1.414 8.414)"
                    fill="none"
                    stroke="#bcb7c2"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </SliderArrowBottom>
            </SliderArrows>
          </TestimonialSlider>
        </TestimonialBox>
      </Container>
    </TestimonialContainer>
  );
}

export default Testimonial;
