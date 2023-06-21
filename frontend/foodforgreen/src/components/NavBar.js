import React from "react";
import { Link } from "react-router-dom";
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
const NaviLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: slateblue;
  }
`;

const NavBar = () => {
  return (
    <NavBarDiv>
      <NavDiv>
        <NaviLink to="/">Home</NaviLink>
      </NavDiv>
      <NavDiv>
        <NaviLink to="/about">AboutFFG</NaviLink>
      </NavDiv>
      <NavDiv>
        <NaviLink to="/">AddPost</NaviLink>
      </NavDiv>
      <NavDiv>
        <NaviLink to="/">Login</NaviLink>
      </NavDiv>
    </NavBarDiv>
  );
};

export default NavBar;
