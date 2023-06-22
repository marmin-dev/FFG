import axios from "axios";

export const updateApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post/update",
      data
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
