import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/boards/2018045141">Game Board</Link>
      </li>
      <li>
        <Link to="/boards/2018045141/write">Game Board Post Write</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
