import { styled } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";

const AboutDiv = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const AboutH1 = styled.h1`
  margin: 4px;
`;

const About = () => {
  return (
    <Responsive>
      <Header />
      <NavBar />
      <AboutH1>What Is FoodForGreen?</AboutH1>
      <AboutDiv>
        FoodForGreen은 음식 나눔을 통해 환경을 보호하고 지속 가능한 미래를 위한
        동참을 장려하는 혁신적인 서비스입니다.
        <br />
        <br /> 우리는 음식의 낭비를 최소화하고, 함께 나눔하는 문화를 형성하여
        지구의 자원을 보존하는 노력에 기여하고자 합니다.
        <br /> FoodForGreen은 사용자들이 자신이 남긴 음식을 등록하고, 지도 위에
        위치를 표시함으로써 다른 사용자들에게 음식을 제공할 수 있는
        플랫폼입니다. <br />
        <br />
        당신이 음식을 나누고자 하는 위치를 정확하게 설정하면, 주변에서 음식을
        필요로 하는 사람들은 해당 위치를 확인하고 음식을 요청할 수 있습니다.
        <br /> 이를 통해 음식이 버려지지 않고, 실제 필요로 하는 사람들에게
        도움이 될 수 있습니다. FoodForGreen의 지도 기능은 음식 나눔을 더욱
        편리하고 효과적으로 만들어줍니다.
        <br /> 당신이 위치를 올리면, 주변에서 음식을 받아가고자 하는 사람들은
        쉽게 해당 위치를 확인할 수 있습니다.
        <br /> 이를 통해 음식을 공유하며 환경을 보호하는데 기여하게 됩니다.
        <br />
        <br /> 우리는 FoodForGreen을 통해 사용자들이 자발적으로 참여할 수 있는
        음식 나눔 커뮤니티를 형성하고자 합니다
        <br /> 환경을 위해 노력하는 우리의 작은 행동이 모여 큰 변화를 이끌어내기
        위한 노력에 함께 참여해 주세요.
      </AboutDiv>
      <Footer />
    </Responsive>
  );
};
export default About;
