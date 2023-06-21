import { useParams } from "react-router-dom";
import Responsive from "../components/Responsive";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailView from "../components/DetailView";
import Footer from "../components/Footer";

const Detail = () => {
  const postId = useParams("id");

  const data = {
    id: 6,
    title: "fake title3",
    lat: 37.49842800315628,
    lng: 127.0272087922495,
    author: "fake author3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
