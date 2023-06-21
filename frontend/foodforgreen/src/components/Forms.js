import { styled } from "styled-components";

// 폼
export const PForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// 작성자, 제목을 입력받을 폼
export const Pinput = styled.input`
  width: 50%;
`;
// 내용을 입력받을 폼
export const PText = styled.textarea`
  width: 50%;
  margin-bottom: 8px;
  height: 150px;
`;
// 제목, 작성자 등 표시하는 div
export const TextDiv = styled.div`
  width: 50%;
  margin: 4px;
  font-size: 20px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  margin: 10px;
  border: none;
  width: 150px;
  height: 50px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: gray;
  }
`;
export const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
