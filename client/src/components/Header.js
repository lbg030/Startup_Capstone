import React from "react";
import {Link} from "react-router-dom";
import '../assets/css/main.css';
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
            src="/images/로고.png"
            style={imagestyle}
          />
          <a href="index.html">스팀팩 </a>
        </h1>
        <p>Steam Community Site</p>
      </div>
      <nav id="nav">
        <ul>
          <li className="current">
            <Link to="/">메인</Link>
          </li>
          <li>
            <Link to="/boards/2018045141">게시판</Link>
          </li>
          <li>
          <Link to="/mbti">MBTI별 게임 추천</Link>
          </li>
          <li>
            <a href="right-sidebar.html">
              스팀 트렌드 [## 게임 랭킹 ]
            </a>
          </li>
          <li>
            <a href="no-sidebar.html">## 채우거나 지우기 </a>
          </li>
        </ul>
      </nav>
    </section>
);

export default Header;
