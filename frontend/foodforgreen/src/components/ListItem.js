import { Link } from "react-router-dom";
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
const ListLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: slateblue;
  }
`;

const ListItem = (props) => {
  return (
    <ItemDiv>
      <ListItemDiv>
        <ListItemH3>
          <ListLink to={`/detail/${props.data.id}`}>
            {props.data.title}
          </ListLink>
        </ListItemH3>
      </ListItemDiv>
      <ListItemDiv>
        <ListItemP>{props.data.author}</ListItemP>
      </ListItemDiv>
    </ItemDiv>
  );
};
export default ListItem;
