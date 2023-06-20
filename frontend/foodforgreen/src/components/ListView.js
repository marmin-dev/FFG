import { styled } from "styled-components";
import ListItem from "./ListItem";

const ListViewDiv = styled.div`
  background-color: white;
  margin: 0px;
`;

const ListView = () => {
  return (
    <ListViewDiv>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListViewDiv>
  );
};
export default ListView;
