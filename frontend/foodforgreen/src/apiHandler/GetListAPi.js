import axios from "axios";

export const getListApi = async () => {
  try {
    const response = await axios.get(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG//ffg_post/list"
    );
    return response.data;
  } catch (e) {
    alert("게시물 불러오기에 싪패하였습니다");
    console.log(e);
  }
};
