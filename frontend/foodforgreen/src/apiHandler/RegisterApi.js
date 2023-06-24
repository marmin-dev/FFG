import axios from "axios";

export const registerApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/register",
      data
    );
  } catch (e) {
    console.log(e);
  }
};
