import React from "react";
import { styled } from "styled-components";
import CommentItem, { ItemDiv } from "./CommentItem";
import CommentForm from "./CommentForm";

const ListViewDiv = styled.div`
  background-color: white;
  margin: 0px;
`;
const CommentHeader = styled.h2`
  margin: 4px;
`;

const Comment = ({ postid, data }) => {
  const username = localStorage.getItem("USERNAME");
  return (
    <ListViewDiv>
      <ItemDiv>
        <CommentHeader>댓글</CommentHeader>
      </ItemDiv>
      {username ? <CommentForm postid={postid} /> : null}
      {data.map((comment) => (
        <CommentItem comment={comment} key={comment.id} postid={postid} />
      ))}
    </ListViewDiv>
  );
};
export default Comment;
