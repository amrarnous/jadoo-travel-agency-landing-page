import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { OutlineButton } from "../Base/Button.style";
import { Container } from "../Base/Container.style";
function Navbar() {
  const NavbarRef = useRef(null);
  const [NavbarToggle, setNavbarToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarStyle);
  }, []);

  const handleNavbarStyle = () => {
    if (window.scrollY > 60) {
      NavbarRef.current.classList.add("white");
    } else {
      NavbarRef.current.classList.remove("white");
    }
  };
  const toggleNavbarMenu = () => {
    setNavbarToggle(!NavbarToggle);
  };
  return (
    <NavbarContainer ref={NavbarRef}>
      <Container>
        <NavbarContainerBox>
          <LogoContainer>
            <img src="./imgs/logo.png" alt="" />
          </LogoContainer>
          <NavbarLinks>
            <li>
              <a href="#">Desitnations</a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
            <li>
              <a href="#">Bookings</a>
            </li>
          </NavbarLinks>
          <NavbarAuthButtons className="navbar-links-lg">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <OutlineButton
                className="signup"
                as="a"
                href="#"
                color="var(--black)"
                hoverColor="var(--orange-red)"
              >
                Sign Up
              </OutlineButton>
            </li>
          </NavbarAuthButtons>
          <NavbarMenuToggler onClick={() => toggleNavbarMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </NavbarMenuToggler>
        </NavbarContainerBox>
      </Container>
      {NavbarToggle ? (
        <NavbarMenu>
          <Container>
            <NavbarMenuLinks>
              <li>
                <a href="#">Desitnations</a>
              </li>
              <li>
                <a href="#">Hotels</a>
              </li>
              <li>
                <a href="#">Flights</a>
              </li>
              <li>
                <a href="#">Bookings</a>
              </li>
            </NavbarMenuLinks>
            <NavbarAuthButtons>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <OutlineButton
                  className="signup"
                  as="a"
                  href="#"
                  color="var(--black)"
                  hoverColor="var(--orange-red)"
                >
                  Sign Up
                </OutlineButton>
              </li>
            </NavbarAuthButtons>
          </Container>
        </NavbarMenu>
      ) : (
        ""
      )}
    </NavbarContainer>
  );
}
const NavbarContainer = styled.div`
  padding: 32px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: 0.2s ease-in all;
  &.white {
    background: var(--white);
    border-bottom: 1px solid #f1f1f1;
    padding: 16px 0px;
  }
  @media only screen and (max-width: 1160px) {
    max-width: 100%;
  }
`;
const NavbarMenuToggler = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const NavbarContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1160px) {
    max-width: 95%;
  }
`;
const LogoContainer = styled.div``;
const NavbarLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  margin-left: auto;
  > li > a {
    text-decoration: none;
    margin: 0px 25px;
    color: var(--black);
    :hover {
      color: var(--orange);
    }
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const NavbarAuthButtons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  margin-left: 32px;
  > li > a:not(.signup) {
    text-decoration: none;
    margin: 0px 25px;
    color: var(--black);
    :hover {
      color: var(--orange);
    }
  }
  @media only screen and (max-width: 991px) {
    justify-content: center;
    margin: 0;
  }
  &.navbar-links-lg {
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;
const NavbarMenu = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 32px 61px rgb(0, 0, 0, 0.1);
  padding-bottom: 16px;
`;
const NavbarMenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  > li > a {
    display: block;
    text-decoration: none;
    margin: 16px 0px;
    color: var(--black);
    :hover {
      color: var(--orange);
    }
  }
`;
export default Navbar;
