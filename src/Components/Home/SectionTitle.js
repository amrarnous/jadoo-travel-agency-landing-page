import React from "react";
import styled from "styled-components";

function SectionTitle({ className, Title, Description }) {
  return (
    <SectionTitleContainer className={className}>
      <h6>{Title}</h6>
      <h1>{Description}</h1>
    </SectionTitleContainer>
  );
}

export default SectionTitle;
const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h6 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: var(--gray);
    margin-top: 0;
  }
  > h1 {
    font-size: 50px;
    margin: 0;
    font-weight: bold;
    @media only screen and (max-width: 991px) {
      font-size: 24px;
    }
  }
`;
