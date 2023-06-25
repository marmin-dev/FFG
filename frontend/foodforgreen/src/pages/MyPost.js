import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import PostMap from "../components/PostMap";
import ListView from "../components/ListView";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getMyPostApi } from "../apiHandler/MyPostApi";
import { styled } from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const username = localStorage.getItem("USERNAME");

  const fetchData = async () => {
    const response = await getMyPostApi(username);
    const parseResponse = JSON.parse(response.body);
    setData(parseResponse);
  };
  return (
    <Responsive>
      <Header />
      <NavBar />
      <HeaderDiv>
        <h2>{username}님이 작성한 게시물</h2>
      </HeaderDiv>
      <PostMap pings={data} />
      <ListView data={data} />
      <Footer />
    </Responsive>
  );
};
export default MyPost;
