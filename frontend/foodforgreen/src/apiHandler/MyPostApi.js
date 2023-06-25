import axios from "axios";

export const getMyPostApi = async (username) => {
  try {
    const response = await axios.get(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post/mypost/" +
        username
    );
    return response.data;
  } catch (e) {
    alert("게시물 불러오기에 실패하였습니다");
    console.log(e);
  }
};
