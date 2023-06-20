import { styled } from "styled-components";

const ResponsiveDiv = styled.div`
  width: 100%;
  border: 1px solid slategray;
  margin: 0px;
  background-color: white;

  @media (max-width: 480px) {
    width: 400px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 480px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 760px;
  }
  @media (min-width: 1025px) and (max-width: 1600px) {
    width: 1000px;
  }
  @media (min-width: 1601px) {
    width: 1600px;
  }
`;

const Responsive = ({ children }) => {
  return <ResponsiveDiv>{children}</ResponsiveDiv>;
};

export default Responsive;
