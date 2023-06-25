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
  const username = localStorage.getItem("USERNAME");
  const logoutHandler = () => {
    localStorage.clear();
    alert("로그아웃 되었습니다");
    window.location.href = "/";
  };
  return (
    <NavBarDiv>
      <NavDiv>
        <NaviLink to="/">Home</NaviLink>
      </NavDiv>
      <NavDiv>
        <NaviLink to="/about">AboutFFG</NaviLink>
      </NavDiv>
      {username ? (
        <NavDiv>
          <NaviLink to="/post">AddPost</NaviLink>
        </NavDiv>
      ) : null}
      <NavDiv>
        {username ? (
          <NaviLink onClick={logoutHandler}>Logout</NaviLink>
        ) : (
          <NaviLink to="/login">Login</NaviLink>
        )}
      </NavDiv>
      {username ? (
        <NavDiv>
          <NaviLink to={"/mypost"}>Welcome {username}</NaviLink>
        </NavDiv>
      ) : null}
    </NavBarDiv>
  );
};

export default NavBar;
