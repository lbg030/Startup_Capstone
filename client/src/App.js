import "./App.css";
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from "./components/이병권/LoginForm";
import Test from "./components/이병권/Test";
import PostEditor from './components/sickbird/PostEditor';
import Boards from './components/sickbird/Boards';
import Posts from './components/sickbird/Posts';

function App() {
  return (
    <>
      <div><Link to='/boards/2018045141/write'>게시글 작성</Link></div>
      <div><Link to='/login'>로그인</Link></div>
      <div><Link to='/register'>회원가입</Link></div>
      <div><Link to ='/boards/2018045141'>sickbird 게시판</Link></div>
      <div><Link to ='/boards/2018045141/4'>게시글 내용 형식</Link></div>
      <Routes>
        <Route path = "/boards/:boardseq/write" element = {<PostEditor />} />
        <Route path = "/boards/:boardseq/" element = {<Boards />} />
        <Route path = "/boards/:boardseq/:postseq" element = {<Posts />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Test />} />
      </Routes>
    </>
  );
}

export default App;
