import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import PostMap from "../components/PostMap";
import ListView from "../components/ListView";
import Footer from "../components/Footer";

const Home = () => {
  const data = [
    {
      id: 8,
      title: "fake title5",
      lat: 33.450401,
      lng: 80.573667,
      author: "fake author1",
      content: "fake content",
    },
    {
      id: 7,
      title: "fake title4",
      lat: 33.450401,
      lng: 122.573667,
      author: "fake author2",
      content: "fake content",
    },
    {
      id: 6,
      title: "fake title3",
      lat: 33.450401,
      lng: 124.573667,
      author: "fake author3",
      content: "fake content",
    },
    {
      id: 5,
      title: "fake title2",
      lat: 33.450401,
      lng: 126.573667,
      author: "fake author1",
      content: "fake content",
    },
  ];
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
