import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PostForm from "../components/PostForm";
import Responsive from "../components/Responsive";

const Post = () => {
  return (
    <Responsive>
      <Header />
      <NavBar />
      <PostForm />
      <Footer />
    </Responsive>
  );
};
export default Post;
