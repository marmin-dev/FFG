import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Responsive from "../components/Responsive";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  LoginDiv,
  LoginDivFull,
  LoginForm,
  LoginInput,
  RegisterLink,
  SubmitBtn,
} from "./Login";
import { registerApi } from "../apiHandler/RegisterApi";

const Register = () => {
  const [login, setLogin] = useState({
    id: "",
    password: "",
    password2: "",
    username: "",
    valid: "",
  });
  // 서브밋 클릭시
  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: login.id,
      password: login.password,
      username: login.username,
    };
    if (login["password2"] === login["password"]) {
      try {
        await registerApi(data);
        alert("회원가입에 성공하셨습니다");
        window.location.href = "/";
      } catch (e) {
        alert("회원가입에 실패하셨습니다.");
      }
    } else {
      alert("비밀번호가 다릅니다.");
    }
  };
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
            <h3>Register</h3>
            <p>Username</p>
            <LoginInput type="text" name="username" onChange={handleChange} />
            <p>ID</p>
            <LoginInput type="text" name="id" onChange={handleChange} />
            <p>Password</p>
            <LoginInput
              type="password"
              name="password"
              onChange={handleChange}
            />
            <p>Check Password</p>
            <LoginInput
              type="password"
              name="password2"
              onChange={handleChange}
            />
            <SubmitBtn type="submit">Register</SubmitBtn>
            <RegisterLink to="/login">
              아이디가 있습니까? 로그인하기
            </RegisterLink>
          </LoginForm>
        </LoginDiv>
      </LoginDivFull>
      <Footer />
    </Responsive>
  );
};
export default Register;
