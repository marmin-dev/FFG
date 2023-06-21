import { styled } from "styled-components";
import ListItem from "./ListItem";

const ListViewDiv = styled.div`
  background-color: white;
  margin: 0px;
`;

const ListView = ({ data }) => {
  return (
    <ListViewDiv>
      {data.map((post) => (
        <ListItem key={post.id} data={post} />
      ))}
    </ListViewDiv>
  );
};
export default ListView;
