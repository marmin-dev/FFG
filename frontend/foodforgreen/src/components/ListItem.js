import { styled } from "styled-components";

const ItemDiv = styled.div`
  background-color: white;
  margin: 0px;
  border-top: 1px solid black;
`;

const ListItemDiv = styled.div``;

const ListItemH3 = styled.h3`
  margin: 5px;
`;
const ListItemP = styled.p`
  margin: 5px;
`;

const ListItem = () => {
  return (
    <ItemDiv>
      <ListItemDiv>
        <ListItemH3>게시글 제목</ListItemH3>
      </ListItemDiv>
      <ListItemDiv>
        <ListItemP>작성자</ListItemP>
      </ListItemDiv>
    </ItemDiv>
  );
};
export default ListItem;
