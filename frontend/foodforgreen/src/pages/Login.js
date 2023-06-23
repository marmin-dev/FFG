import { styled } from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import { SubmitButton } from "../components/Forms";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginApi } from "../apiHandler/LoginApi";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LoginDivFull = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  border: 1px solid black;
`;

export const LoginInput = styled.input`
  width: 50%;
`;

export const SubmitBtn = styled(SubmitButton)`
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const RegisterLink = styled(Link)`
  margin-bottom: 20px;
`;

const Login = () => {
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });
  // 로그인 버튼  클릭시 일어날 이벤트
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(login);
      const response = await loginApi(login);
      const data = JSON.parse(response.body);
      const [auth_token, username] = [data["token"], data["username"]];
      localStorage.setItem("AUTH_TOKEN", auth_token);
      localStorage.setItem("USERNAME", username);
      window.location.href = "/";
    } catch (a) {
      console.log(a);
      alert("로그인에 실패하셨습니다");
    }
  };
  // 인풋 값 변화시 일어날 이벤트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Responsive>
      <Header />
      <NavBar />
      <LoginDivFull>
        <LoginDiv>
          <LoginForm onSubmit={loginSubmit}>
            <h3>Login</h3>
            <p>ID</p>
            <LoginInput type="text" name="id" onChange={handleChange} />
            <p>Password</p>
            <LoginInput
              type="password"
              name="password"
              onChange={handleChange}
            />
            <SubmitBtn type="submit">Login</SubmitBtn>
            <RegisterLink to="/register">회원가입하기</RegisterLink>
          </LoginForm>
        </LoginDiv>
      </LoginDivFull>
      <Footer />
    </Responsive>
  );
};
export default Login;
