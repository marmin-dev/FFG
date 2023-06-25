import axios from "axios";

export const updateApi = async (data) => {
  try {
    const response = await axios.post(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post/update",
      data,
      { headers: { AuthToken: `${localStorage.getItem("AUTH_TOKEN")}` } }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
