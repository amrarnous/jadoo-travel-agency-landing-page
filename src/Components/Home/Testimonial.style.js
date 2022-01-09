import styled from "styled-components";
export const TestimonialContainer = styled.div`
  margin-top: 105px;
  @media only screen and (max-width: 567px) {
    margin-bottom: 105px;
  }
`;
export const TestimonialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    max-width: calc(100% / 2 - 16px);
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column-reverse;
    > div {
      max-width: 100%;
    }
  }
`;
export const TestimonialSlider = styled.div`
  position: relative;
`;
export const TestimonialContent = styled.div`
  @media only screen and (max-width: 991px) {
    display: none;
  }
  .title-container {
    align-items: start;
  }
  h6,
  h1 {
    text-align: left;
  }
  h1 {
    color: #14183e;
  }
  h6 {
    font-weight: bold;
  }
`;

export const SliderDots = styled.div`
  display: flex;
  align-items: center;
  margin-top: 64px;
`;
export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background: #e5e5e5;
  border-radius: 50%;
  margin-right: 24px;
  cursor: pointer;
  &.active {
    background: var(--gray-purple);
  }
`;
export const Slide = styled.div`
  max-width: 504px;
  width: 100%;
  border: 2px solid #f7f7f7;
  padding: 24px 32px;
  background: var(--white);
  position: absolute;
  transition: 0.4s ease-in-out all;
  top: 0;
  left: 0;
  @media only screen and (max-width: 991px) {
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 567px) {
    left: 5%;
    transform: translateX(0);
    max-width: 95%;
    opacity: 0;
  }
  img {
    transition: 0.4s ease-in-out opacity;
    opacity: 0;
  }
  &.active {
    border-color: transparent;
    box-shadow: 0px 11.85px 26.3px rgba(0, 0, 0, 0.1);
    left: -50px;
    top: -80px;
    z-index: 2;
    img {
      opacity: 1;
    }
    @media only screen and (max-width: 991px) {
      left: 60%;
    }
    @media only screen and (max-width: 567px) {
      left: 0;
      opacity: 1;
    }
  }
`;
export const SlideAvatar = styled.div`
  position: absolute;
  top: -35px;
  left: -32px;
  @media only screen and (max-width: 567px) {
    position: static;
  }
`;
export const SlideContent = styled.div`
  p {
    font-size: 16px;
    color: var(--gray-purple);
  }
  h3 {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--gray-purple);
  }
  h4 {
    margin: 0;
    font-size: 14px;
    color: #5e6282;
    font-weight: 400;
  }
`;
export const SliderArrows = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
  > div {
    margin: 24px 0px;
    cursor: pointer;
    svg {
      stroke: #bcb7c2;
      :hover {
        path {
          stroke: #3e2e4d;
        }
      }
    }
  }
`;
export const SliderArrowTop = styled.div``;
export const SliderArrowBottom = styled.div``;
