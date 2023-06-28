import axios from "axios";

// 게시물 별 댓글 가져오기
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
// 게시물에 댓글 등록하기
export const postCommentApi = async (postid, data) => {
  try {
    const response = await axios.post(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${postid}`,
      data,
      { headers: { AuthToken: `${localStorage.getItem("AUTH_TOKEN")}` } }
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
// 등록된 댓글 수정하기
export const putCommentApi = async (id, data) => {
  try {
    const response = await axios.put(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${id}`,
      data,
      { headers: { AuthToken: `${localStorage.getItem("AUTH_TOKEN")}` } }
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
// 댓글 id로 댓글 삭제하기
export const deleteCommentApi = async (id) => {
  try {
    const response = await axios.delete(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/${id}`,
      { headers: { AuthToken: `${localStorage.getItem("AUTH_TOKEN")}` } }
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
// 게시물이 삭제되면 그 게시물 id에 해당하는 댓글 지우기
export const deletePostCommentApi = async (postid) => {
  try {
    const response = await axios.delete(
      `https://otenm6hvba.execute-api.us-east-1.amazonaws.com/FFG/comment/all/${postid}`,
      { headers: { AuthToken: `${localStorage.getItem("AUTH_TOKEN")}` } }
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
