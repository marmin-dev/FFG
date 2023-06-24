import axios from "axios";

export const loginApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/login",
      data
    );
    console.log("데이터" + response);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
