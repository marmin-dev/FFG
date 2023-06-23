import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  PForm,
  PText,
  Pinput,
  SubmitButton,
  SubmitDiv,
  TextDiv,
} from "./Forms";
import { getLocation } from "../apiHandler/Geolocation";
import { postApi } from "../apiHandler/PostApi";

const PostForm = () => {
  // 데이터 등록 폼
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    lat: "36.84254655866462",
    lng: "127.83653086808023",
  });
  // 서브밋 시 일어날 이벤트
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postApi(formData);
    alert("게시글이 등록되었습니다");
    window.location.href = "/";
  };
  // 요소 변경시 일어날 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // 현재 위치를 가져오는 이벤트
  const nowLocation = async () => {
    const location = await getLocation();
    if (location) {
      setFormData({
        ...formData,
        lat: location.lat,
        lng: location.lng,
      });
    }
  };
  return (
    <PForm onSubmit={handleSubmit}>
      <TextDiv>제목</TextDiv>
      <Pinput
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextDiv>작성자</TextDiv>
      <Pinput
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <TextDiv>내용</TextDiv>
      <PText
        name="content"
        onChange={handleChange}
        value={formData.content}
        required
      />
      <TextDiv>위치표시</TextDiv>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: formData.lat,
          lng: formData.lng,
        }}
        style={{
          width: "50%",
          height: "450px",
        }}
        level={14} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          setFormData({
            ...formData,
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        {/* 클릭시 마커를 표시 */}
        {formData.lat === "" ? null : (
          <MapMarker
            position={{
              lat: formData.lat,
              lng: formData.lng,
            }}
          />
        )}
      </Map>
      <SubmitDiv>
        <SubmitButton type="submit">등록하기</SubmitButton>
        <SubmitButton type="button" onClick={nowLocation}>
          현재위치 사용하기
        </SubmitButton>
      </SubmitDiv>
    </PForm>
  );
};
export default PostForm;
