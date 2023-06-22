import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import "./App.css";
import About from "./pages/About";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="center-container">
      <Routes>
        {/* 메인페이지 게시물 리스팅 */}
        <Route path="/" element={<Home />} />
        {/* 게시물 작성 페이지 */}
        <Route path="/post" element={<Post />} />
        {/* 게시물 상세보기 페이지 */}
        <Route path="/detail/:id" element={<Detail />} />
        {/* 게시물 업데이트 페이지 */}
        <Route path="/update/:id" element={<Update />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
