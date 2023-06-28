import { styled } from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import Footer from "../components/Footer";

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const NotFoundH1 = styled.h1`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
`;

const NotFound = () => {
  return (
    <Responsive>
      <Header />
      <NavBar />
      <NotFoundDiv>
        <NotFoundH1>404 Not Found</NotFoundH1>
      </NotFoundDiv>
      <Footer />
    </Responsive>
  );
};
export default NotFound;
