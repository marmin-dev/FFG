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

const Register = () => {
  const [login, setLogin] = useState({
    id: "",
    password: "",
    valid: "",
  });
  const loginSubmit = () => {
    console.log(login);
    alert(login.toString());
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
            <h3>Login</h3>
            <p>ID</p>
            <LoginInput type="text" name="id" onChange={handleChange} />
            <p>Password</p>
            <LoginInput
              type="password"
              name="password"
              onChange={handleChange}
            />
            <p>Check Password</p>
            <LoginInput type="password" name="valid" onChange={handleChange} />
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
