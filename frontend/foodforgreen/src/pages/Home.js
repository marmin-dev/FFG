import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import PostMap from "../components/PostMap";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getListApi } from "../apiHandler/GetListAPi";
import PageListView from "../components/PageListView";
import { getPageListApi } from "../apiHandler/GetPageListApi";

const Home = () => {
  // 지도에 표시핧 전체 데이터
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // 지도에 전체 데이터를 표시할 데이터 불러오기
  const fetchData = async () => {
    const response = await getListApi();
    const parseResponse = JSON.parse(response.body);
    setData(parseResponse);
  };

  return (
    <Responsive>
      <Header />
      <NavBar />
      <PostMap pings={data} />
      <PageListView />
      <Footer />
    </Responsive>
  );
};
export default Home;
