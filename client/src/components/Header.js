import React from "react";
import {Link} from "react-router-dom";
import '../assets/css/main.css';
import logoPath from '../images/로고.png' 
import Login from './Main';

const imagestyle = {
  height: "10vh",
  width: "10vh",
  margin: "10 10 10 10",
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
            src={logoPath}
            style={imagestyle}
          />
          <Link to="/">스팀팩</Link>
        </h1>
        <p>Steam Community Site</p>
      </div>
      {/* <Login/> */}
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
            <Link to="/ranking">스팀게임 인기순위</Link>
          </li>
          <li>
            ## 채우거나 지우기
          </li>
        </ul>
      </nav>
    </section>
);

export default Header;
