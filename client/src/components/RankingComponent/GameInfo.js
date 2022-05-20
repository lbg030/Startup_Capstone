import React from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

function GameInfo(props) {
  const {name, id, rank} = props;
  return (
      <div>
        <h1>{rank}</h1>
        <span style={{fontSize:"20px"}}>
          <img style={{width:"10%", height:"10%"}}src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`} alt=""/>
          <Link href={`https://store.steampowered.com/app/${id}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;{name}
          </Link>
        </span>
      </div>
  );
}
export default GameInfo;