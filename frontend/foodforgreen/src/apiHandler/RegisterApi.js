import axios from "axios";

export const registerApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/register",
      data
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
