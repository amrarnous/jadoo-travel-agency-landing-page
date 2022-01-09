import styled from "styled-components";

export const ClientsContainer = styled.div`
  margin-top: 215px;
  @media only screen and (max-width: 567px) {
    margin-top: 315px;
  }
`;
export const ClientsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Client = styled.div`
  max-width: calc(100% / 5 - 16px);
  width: 100%;
  filter: grayscale(100%);
  transition: 0.2s all ease-in-out;
  @media only screen and (max-width: 991px) {
    max-width: calc(100% / 4 - 16px);
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    max-width: calc(100% / 2 - 16px);
    text-align: center;
  }
  &:hover {
    filter: grayscale(0);
  }
`;
