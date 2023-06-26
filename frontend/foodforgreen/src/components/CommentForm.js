import { useState } from "react";
import { styled } from "styled-components";
import { postCommentApi } from "../apiHandler/CommentApi";

const Coform = styled.form`
  display: flex;
  align-items: flex-start;
  margin: 4px;
`;

const Cinput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Cbutton = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: gray;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CommentForm = ({ postid }) => {
  const username = localStorage.getItem("USERNAME");
  const [data, setData] = useState({
    author: username,
    content: "",
  });
  // 등록시 일어날 핸들러
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(postid);
    await postCommentApi(postid, data);
    alert("댓글 등록 완료");
    window.location.href = `/detail/${postid}`;
  };
  // 요소 변경시 일어날 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Coform onSubmit={submitHandler}>
      <Cinput
        placeholder="댓글을 입력해주세요"
        name="content"
        value={data.content}
        onChange={handleChange}
      />
      <Cbutton type="submit">댓글달기</Cbutton>
    </Coform>
  );
};

export default CommentForm;
