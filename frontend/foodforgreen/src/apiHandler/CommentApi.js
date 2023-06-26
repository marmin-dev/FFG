import axios from "axios";

export const getCommentApi = async (postid) => {
  try {
    const response = await axios.get(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${postid}`
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const postCommentApi = async (postid, data) => {
  try {
    const response = await axios.post(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${postid}`,
      data
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const putCommentApi = async (id, data) => {
  try {
    const response = await axios.put(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${id}`,
      data
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const deleteCommentApi = async (id) => {
  try {
    const response = await axios.delete(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${id}`
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const deletePostCommentApi = async (postid) => {
  try {
    const response = await axios.delete(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/all/${postid}`
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
