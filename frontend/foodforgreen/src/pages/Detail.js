import { useParams } from "react-router-dom";
import Responsive from "../components/Responsive";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailView from "../components/DetailView";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getDetailApi } from "../apiHandler/GetDetailApi";

const Detail = () => {
  const postId = useParams("id");
  const [data, setData] = useState({});
  useEffect(() => {
    ApiHandle();
  }, []);
  const ApiHandle = async () => {
    const response = await getDetailApi(postId);
    console.log(response);
    const parseResponse = JSON.parse(response.body);
    setData(parseResponse);
  };
  return (
    <Responsive>
      <Header />
      <NavBar />
      <DetailView data={data} />
      <Footer />
    </Responsive>
  );
};
export default Detail;
