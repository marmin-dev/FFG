import { styled } from "styled-components";

const FooterDiv = styled.div`
  height: 100px;
  background-color: lightgray;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return <FooterDiv>By Grace&MarminDev</FooterDiv>;
};
export default Footer;
