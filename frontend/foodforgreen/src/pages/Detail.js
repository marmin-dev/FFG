import { useParams } from "react-router-dom";
import Responsive from "../components/Responsive";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailView from "../components/DetailView";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getDetailApi } from "../apiHandler/GetDetailApi";
import Comment from "../components/Comment";
import { getCommentApi } from "../apiHandler/CommentApi";

const Detail = () => {
  const postId = useParams("id");
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  useEffect(() => {
    ApiHandle();
    CommentApiHandle();
  }, []);
  const ApiHandle = async () => {
    const response = await getDetailApi(postId);
    console.log(response);
    const parseResponse = JSON.parse(response.body);
    setData(parseResponse);
  };
  const CommentApiHandle = async () => {
    console.log(postId);
    const response = await getCommentApi(postId.id);
    console.log(response.data);
    setComment(response.data);
  };
  return (
    <Responsive>
      <Header />
      <NavBar />
      <DetailView data={data} />
      <Comment postid={postId.id} data={comment} />
      <Footer />
    </Responsive>
  );
};
export default Detail;
