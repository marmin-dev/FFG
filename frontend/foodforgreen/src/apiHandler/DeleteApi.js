import axios from "axios";

export const deleteApi = async (id) => {
  try {
    await axios.delete(
      "https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/ffg_post/delete",
      { data: { id: id["id"] } }
    );
  } catch (e) {
    console.log(e);
  }
};
