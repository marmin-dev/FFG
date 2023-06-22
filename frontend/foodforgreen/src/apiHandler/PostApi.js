import axios from "axios";

export const postApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post",
      data
    );
    console.log(response);
  } catch (e) {
    alert("게시물 등록에 실패하셨습니다");
    console.log(e);
  }
};
