import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
const imagestyle = {
  height: "10vh",
  width: "10vh",
  // float: "left",
  // border: "1px solid white",
};
const Header = () => (
    <section id="header" className="wrapper">
      <div id="logo">
        <h1>
          <img
            className="logo"
            alt="logo"
            src="images/로고.png"
            style={imagestyle}
          />
          <Link to="/">스팀팩</Link>
        </h1>
        <p>Steam Community Site</p>
      </div>
      <nav id="nav">
        <ul>
          <li className="current">
            <a href="index.html">할인 정보</a>
          </li>
          <li>
            <Link to="/boards/2018045141">게시판</Link>
          </li>
          <li>
            <a href="left-sidebar.html">MBTI별 게임 추천</a>
          </li>
          <li>
            <a href="right-sidebar.html">
              스팀 트렌드 [## 게임 랭킹 ]
            </a>
          </li>
          <li>
            <Link to="/boards/2018045141/write">게시글 작성</Link>
          </li>
        </ul>
        {/* <img
          className="logo"
          alt="logo"
          src="images/로고.png"
          style={imagestyle}
        />
        <a href="index.html" style={imagestyle}>
          스팀팩
        </a> */}
      </nav>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.dropotron.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </section>
);

export default Header;