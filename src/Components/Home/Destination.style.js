import styled from "styled-components";
export const DestintaionContainer = styled.div`
  margin-top: 123px;
  background: url("./imgs/d-bg.svg") no-repeat;
  background-position-x: 83%;
  background-position-y: 88%;
`;
export const DestinationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  @media only screen and (max-width: 991px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const Destination = styled.div`
  position: relative;
  max-width: 315px;
  box-shadow: 0 15.85px 26.3px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  transition: 0.3s ease-in-out all;
  cursor: pointer;
  :hover {
    transform: translateY(-20px) scale(1.05);
  }
  @media only screen and (max-width: 991px) {
    margin: 8px 16px;
  }
`;
export const DestinationPhoto = styled.div`
  > img {
    max-width: 100%;
    height: 457px;
    object-fit: cover;
    border-radius: 24px;
  }
`;
export const DestinationDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--white);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 27px 20px 42px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  > span:nth-child(2) {
    text-align: right;
  }
  > span {
    display: block;
    max-width: calc(100% / 2 - 8px);
    width: 100%;
    color: var(--gray-purple);
    font-size: 16px;
  }
  > span:not(:nth-child(3)) {
    margin-bottom: 16px;
  }
  .trip-duration {
    img {
      margin-right: 8px;
    }
  }
`;
