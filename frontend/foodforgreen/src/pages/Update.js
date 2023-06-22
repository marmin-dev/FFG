import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import UpdateForm from "../components/UpdateForm";
import { getDetailApi } from "../apiHandler/GetDetailApi";
import { useParams } from "react-router-dom";

const Update = () => {
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
      <UpdateForm data={data} />
      <Footer />
    </Responsive>
  );
};
export default Update;
