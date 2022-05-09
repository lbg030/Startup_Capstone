import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}'s Profile</Link>
      </li>
      <li>
        <Link to="/boards/2018045141">게시판</Link>
      </li>
      <li>
        <Link to="/boards/2018045141/write">게시글 작성</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
