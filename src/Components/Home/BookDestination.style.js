import styled from "styled-components";
export const BookDestinationContainer = styled.div`
  margin-top: 105px;
`;
export const BookDestinationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;
export const BookDestinationPhoto = styled.div`
  transition: 0.3s ease-in all;
  @media only screen and (min-width: 1199px) {
    &:hover {
      transform: translateY(-25px) scale(1.05);
    }
  }
`;
export const BookDestinationContent = styled.div`
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
export const BookFeatures = styled.div`
  margin-top: 32px;
`;
export const Feature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: var(--gray-purple);
    margin: 0;
    margin-bottom: 4px;
  }
  p {
    font-size: 16px;
    line-height: 19px;
    font-size: 16px;
    margin: 0;
  }
`;
export const FeatureIcon = styled.div`
  display: flex;
  margin-right: 24px;
`;
export const FeatureContent = styled.div``;
