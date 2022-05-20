import React from "react";
import { Button, List, Card, Row, Col, Divider, Image } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/main.css';
const saleButtonStyle = {color: 'white', backgroundColor:'#565656', width: 105, height: 35, fontSize: 16};
const Intro = () => (
  <section id="intro" className="wrapper style1">
    <div className="title">BEST 게시글</div>
    <Row justify="center">
      <Row gutter={[16, 24]} style={{width:"80%"}}>
        <Col span={24}>
          <Row justify='space-between'>
            <Col span={7}>
              <Image width={300} src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHkoB7%2FbtruqEHpTg1%2FxbFgIuHWM13KkfIU1FEsb1%2Fimg.png" preview={false}/>
            </Col>
            <Col span={7}>
              <Image width={300} src="https://steamcdn-a.akamaihd.net/steam/apps/1296610/header.jpg?t=1592444837" preview={false}/>
            </Col>
            <Col span={7}>
              <Image width={300} src="https://cdn.cloudflare.steamstatic.com/steam/apps/460950/header.jpg?t=1622217167" preview={false}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  </section>
);

export default Intro;
