import React from "react";
import { Row, Col, Image } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../assets/css/main.css';
const Intro = () => (
  <section id="intro" className="wrapper style1">
    <div className="title">BEST 게시글</div>
    <Row justify="center">
      <Row gutter={[16, 24]} style={{width:"100%"}}>
        <Col span={24}>
          <Row justify='space-between'>
            <Col span={8}>
              <Image width={480} src="https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg" preview={false}/>
              <Link>
                <h1 style={{marginTop:"20px", fontSize:"25px"}}>배틀그라운드 설정 + 에임 꿀팁</h1>
              </Link>
            </Col>
            <Col span={8}>
              <Image width={480} src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg" preview={false}/>
              <Link>
                <h1 style={{marginTop:"20px", fontSize:"25px"}}>엘든링 초보자용 공략집</h1>
              </Link>
            </Col>
            <Col span={8}>
              <Image width={480} src="https://cdn.cloudflare.steamstatic.com/steam/apps/1296610/header.jpg" preview={false}/>
              <Link>
                <h1 style={{marginTop:"20px", fontSize:"25px"}}>고블린이 폭탄 던지는 게임, 페글린 리뷰</h1>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  </section>
);

export default Intro;
