import axios from "axios";

export const getPageListApi = async (page) => {
  try {
    const response = await axios.get(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post/page/${page}`
    );
    console.log(response.data);
    console.log(page);
    return response.data;
  } catch (e) {
    alert("게시물 불러오기에 실패하였습니다");
    console.log(e);
  }
};
