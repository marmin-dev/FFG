import { Map, MapMarker } from "react-kakao-maps-sdk";
import { styled } from "styled-components";
import { DeleteButton, UpdateButton } from "./Buttons";

const DetailViewDiv = styled.div`
  /* border-bottom: 1px solid black; */
  border-top: 1px solid black;
`;

const DetailViewH1 = styled.h1`
  margin: 8px;
  margin-left: 4px;
`;
const DetailViewH3 = styled.h3`
  padding-left: 4px;
  color: grey;
`;
const DetailViewText = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 15px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  padding-left: 4px;
  border-bottom: 1px solid grey;
`;

const DetailView = (props) => {
  return (
    <DetailViewDiv>
      <DetailViewH1>{props.data.title}</DetailViewH1>
      <DetailViewH3>{props.data.author}</DetailViewH3>
      <ButtonDiv>
        <UpdateButton>수정하기</UpdateButton>
        <DeleteButton>삭제하기</DeleteButton>
      </ButtonDiv>
      <DetailViewText>{props.data.content}</DetailViewText>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: props.data.lat,
          lng: props.data.lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker
          position={{
            lat: props.data.lat,
            lng: props.data.lng,
          }}
        />
      </Map>
    </DetailViewDiv>
  );
};
export default DetailView;
