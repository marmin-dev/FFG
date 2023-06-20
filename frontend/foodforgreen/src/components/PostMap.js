import { Map } from "react-kakao-maps-sdk";
import Ping from "./Ping";
import { useState } from "react";

const PostMap = ({ pings }) => {
  const [resetMarker, setResetMarker] = useState(false);
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 36.84254655866462,
        lng: 127.83653068080238,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
        margin: "0px",
      }}
      level={14} // 지도의 확대 레벨
      onClick={() => setResetMarker(false)}
    >
      {pings.map((ping) => (
        <Ping
          key={ping.id}
          ping={ping}
          resetMarker={resetMarker}
          setResetMarker={setResetMarker}
        ></Ping>
      ))}
    </Map>
  );
};
export default PostMap;
