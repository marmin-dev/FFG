import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import PostMap from "../components/PostMap";
import ListView from "../components/ListView";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getListApi } from "../apiHandler/GetListAPi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

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
      <ListView data={data} />
      <Footer />
    </Responsive>
  );
};
export default Home;
