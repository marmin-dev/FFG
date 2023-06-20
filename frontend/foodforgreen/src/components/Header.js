import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  background-color: lightgray;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const HeaderH1 = styled.h1`
  font-size: 40px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderH1>
        <HeaderLink>FoodForGreen</HeaderLink>
      </HeaderH1>
    </HeaderDiv>
  );
};

export default Header;
