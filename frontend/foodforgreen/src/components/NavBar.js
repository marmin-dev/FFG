import React from "react";
import { styled } from "styled-components";

const NavBarDiv = styled.div`
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavDiv = styled.div`
  margin: 0 10px;
`;

const NavBar = () => {
  return (
    <NavBarDiv>
      <NavDiv>Home</NavDiv>
      <NavDiv>About</NavDiv>
      <NavDiv>Contact</NavDiv>
      <NavDiv>Menu</NavDiv>
    </NavBarDiv>
  );
};

export default NavBar;
