import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 24px;
  border-radius: 5px;
  transition: 0.2s ease-in-out all;
  background: ${(props) => props.color};
  color: var(--white);
  display: block;
  min-width: 105px;
  border: none;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  :hover {
    opacity: 0.8;
  }
`;
export const OutlineButton = styled(Button)`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background: transparent;
  :hover {
    border-color: transparent;
    color: var(--white);
    background: ${(props) => props.hoverColor ?? props.color};
  }
`;
