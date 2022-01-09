import styled from "styled-components";
export const SubscripeNewsletterContainer = styled.div`
  margin-top: 105px;
  background: url("./imgs/stars-2.png") no-repeat;
  background-position: 84% 92%;
  padding-bottom: 105px;
`;
export const SubscripeNewsletterBox = styled.div`
  height: 407px;
  border-radius: 20px;
  border-top-left-radius: 129px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("./imgs/newsletter.png"), #f9f7fe center;
  background-position: 100%;
  position: relative;
  > img {
    position: absolute;
    top: -20px;
    right: -25px;
  }
  > h1 {
    max-width: 859px;
    width: 100%;
    font-size: 32px;
    color: #5e6282;
    text-align: center;
    margin-bottom: 74px;
    font-weight: 600;
    @media only screen and (max-width: 991px) {
      font-size: 24px;
    }
  }
`;
export const SubscripeNewsletterForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 625px;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  .form-group {
    max-width: 421px;
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 32px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  input {
    width: 100%;
    border-radius: 10px;
    height: 68px;
    padding-left: 66px;
    border: 1px solid transparent;
    outline: none;
    margin-right: 24px;
    transition: 0.2s ease-in all;
    :focus,
    :hover {
      border-color: var(--orange-red);
    }
  }
  > button {
    max-width: 180px;
    width: 100%;
    height: 68px;
    @media only screen and (max-width: 991px) {
      margin-top: 8px;
      height: 48px;
    }
  }
`;
