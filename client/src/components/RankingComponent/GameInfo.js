import React from 'react';
import { Link } from "react-router-dom";
import { List, Card, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

function GameInfo(props) {
  const {name, id, rank, current, price} = props;
  return (
      <Row align="middle">
        <Col span={2} style={{textAlign:"center", fontSize:"30px"}}>
          <h1>{rank}</h1>
        </Col>
        <Col span={4}>
          <img style={{width:"80%", height:"80%"}}src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`} alt=""/>
        </Col>
        <Col span={6} style={{textAlign:"center", fontSize:"20px"}}>
          <a href={`https://store.steampowered.com/app/${id}`} target='_blank'>
            {name}
          </a>
        </Col>
        <Col span={6} style={{ textAlign:"center", fontSize:"20px"}}>
          {current}
        </Col>
        <Col span={6} style={{ textAlign:"center", fontSize:"20px"}}>
          {price}
        </Col>
      </Row>
  );
}
export default GameInfo;