import { styled } from "styled-components";
import { deleteCommentApi, putCommentApi } from "../apiHandler/CommentApi";
import { useState } from "react";

export const ItemDiv = styled.div`
  background-color: white;
  margin: 0px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const ListItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItemForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ListItemH3 = styled.h3`
  margin: 4px;
`;
const ListItemP = styled.p`
  margin: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CommentItem = ({ comment, postid }) => {
  const username = localStorage.getItem("USERNAME");
  const [update, setUpdate] = useState(false);
  const [editedData, setEditedData] = useState({
    author: comment.author,
    content: comment.content,
  });
  const handleDelete = async (id) => {
    await deleteCommentApi(comment.id);
    alert("댓글이 삭제되었습니다");
    window.location.href = `/detail/${postid}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putCommentApi(comment.id, editedData);
    console.log(editedData);
    setUpdate(false);
    window.location.href = `/detail/${postid}`;
  };

  const handleEdit = () => {
    setUpdate(true);
  };

  return (
    <ItemDiv>
      {update ? (
        <ListItemForm onSubmit={handleSubmit}>
          <ListItemH3>
            <input
              type="text"
              name="author"
              value={editedData.author}
              onChange={handleChange}
              readOnly
            />
          </ListItemH3>
          <ListItemP>
            <textarea
              name="content"
              value={editedData.content}
              onChange={handleChange}
            />
          </ListItemP>
          <ButtonContainer>
            <button type="submit">수정</button>
            <button onClick={() => setUpdate(false)}>취소</button>
          </ButtonContainer>
        </ListItemForm>
      ) : (
        <ListItemDiv>
          <ListItemH3>{comment.author}</ListItemH3>
          <ListItemP>{comment.content}</ListItemP>
        </ListItemDiv>
      )}

      {username === comment.author ? (
        <ButtonContainer>
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
          <EditButton onClick={handleEdit}>수정</EditButton>
        </ButtonContainer>
      ) : null}
    </ItemDiv>
  );
};

export default CommentItem;
