import { Map, MapMarker } from "react-kakao-maps-sdk";
import { styled } from "styled-components";
import { DeleteButton, UpdateButton } from "./Buttons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteApi } from "../apiHandler/DeleteApi";

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
  margin-bottom: 4px;
  margin-top: 4px;
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

const UpdateLink = styled(Link)`
  font-style: none;
  color: black;
`;

const ContentDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 4px;
`;

const MapDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailView = (props) => {
  const postId = useParams("id");
  const [latLng, setLatLng] = useState({
    lat: 36.84254655866462,
    lng: 127.83653068080238,
  });
  const [level, setLevel] = useState(14);
  useEffect(() => {
    // API GET
    if (Object.keys(props.data).length !== 0) {
      setLatLng({
        lat: props.data.lat,
        lng: props.data.lng,
      });
      setLevel(5);
    }
  }, [props.data]);
  // 삭제 메서드 작성
  const deleteHandler = async () => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      try {
        await deleteApi(postId);
        alert("게시글이 삭제되었습니다");
        window.location.href = "/";
      } catch (e) {
        alert("게시글 삭제에 실패하였습니다");
      }
    } else {
      alert("삭제는 로그인 후 진행해주세요");
    }
  };
  const username = localStorage.getItem("USERNAME");
  return (
    <DetailViewDiv>
      <ContentDiv>
        <DetailViewH1>{props.data.title}</DetailViewH1>
        <DetailViewH3>작성자: {props.data.author}</DetailViewH3>
        {username === props.data.author ? (
          <ButtonDiv>
            <UpdateButton>
              <UpdateLink to={`/update/${props.data.id}`}>수정하기</UpdateLink>
            </UpdateButton>
            <DeleteButton onClick={deleteHandler}>삭제하기</DeleteButton>
          </ButtonDiv>
        ) : null}
      </ContentDiv>
      <ContentDiv>
        <DetailViewH3>본문</DetailViewH3>
        <DetailViewText>{props.data.content}</DetailViewText>
      </ContentDiv>
      <MapDiv>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: latLng["lat"],
            lng: latLng["lng"],
          }}
          style={{
            // 지도의 크기
            width: "50%",
            height: "350px",
          }}
          level={level} // 지도의 확대 레벨
        >
          <MapMarker
            position={{
              lat: props.data.lat,
              lng: props.data.lng,
            }}
          />
        </Map>
      </MapDiv>
    </DetailViewDiv>
  );
};

export default DetailView;
