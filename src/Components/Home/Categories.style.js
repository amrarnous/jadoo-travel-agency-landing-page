import styled from "styled-components";

export const CategoriesContainer = styled.div`
  background: url("/imgs/stars.png") no-repeat;
  background-position: 98% 0%;
  margin-top: 105px;
`;
export const CategoriesBox = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
`;
export const Category = styled.div`
  max-width: 267px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
  border-radius: 36px;
  transition: 0.2s ease-in all;
  position: relative;
  background: transparent;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 10px;
    background-color: var(--orange);
    opacity: 0;
    z-index: -1;
    transition: 0.4s ease-in all;
  }

  :hover {
    box-shadow: 0px 51.85px 46.3px rgba(0, 0, 0, 0.07);
    background: var(--white);

    :after {
      left: -35px;
      bottom: -30px;
      opacity: 1;
    }
  }
  > h1,
  > p {
    text-align: center;
  }
  > h1 {
    margin: 24px 0px 16px 0px;
    font-size: 20px;
    @media only screen and (max-width: 991px) {
      font-size: 18px;
    }
  }
  > p {
    font-size: 16px;
    color: var(--gray);
    max-width: 181px;
    margin: auto;
    @media only screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;
