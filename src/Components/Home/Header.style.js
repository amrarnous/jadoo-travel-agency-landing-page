import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  background: url("/imgs/Decore.png") center center no-repeat;
  background-size: cover;
  background-position-y: 245%;
  background-position-x: 0;
  padding-top: 60px;
`;
export const HeaderContent = styled.div`
  max-width: 630px;
  width: 100%;
  > h6 {
    font-size: 18px;
    text-transform: uppercase;
    color: var(--orange-red);
    margin-bottom: 24px;
    margin-top: 0px;
  }
  > h1 {
    font-size: 84px;
    color: var(--dark-purple);
    font-weight: 800;
    margin-bottom: 8px;
    margin-top: 0px;
    letter-spacing: -4.71px;
    line-height: 89px;
    background: url("/imgs/speck.png") no-repeat;
    background-position: 109% 19%;
  }
  > p {
    font-size: 16px;
    color: var(--gray);
    line-height: 30px;
    font-weight: 500;
    max-width: 447px;
  }
`;
export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderButtonsPlayVideo = styled.div`
  & button {
    display: flex;
    align-items: center;
    > span {
      color: var(--black);
      display: block;
      margin-left: 16px;
    }
  }
`;
export const HeaderPhoto = styled.div`
  flex: 1;
  @media only screen and (min-width: 1200px) {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
  > img {
    max-width: 100%;
    height: auto;
  }
`;
