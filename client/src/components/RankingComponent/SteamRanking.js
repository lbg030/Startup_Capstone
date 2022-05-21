import React, { useEffect,useState } from 'react';
import { List, Card, Row, Col, Divider } from 'antd';
import { useHistory } from "react-router-dom";
import GameInfo from "components/RankingComponent/GameInfo";
import {RankingData} from './RankingData';
import 'antd/dist/antd.css';
function SteamRanking() {
  return (
    <>
      <Row justify='center'>
        <Row style={{width:'80%'}}>
          <Divider style={{backgroundColor:"#2c3341"}}> 
            <h1 style={{fontSize: 20, color:"white"}}>스팀게임 인기순위</h1>
          </Divider>
          <Col span={24}>
            <Card style={{width: '100%'}}>
              <Row align="middle">
                <Col span={2} style={{ textAlign:"center", fontSize:"20px"}}>
                  <h1>순위</h1>
                </Col>
                <Col span={4}/>
                <Col span={6} style={{ textAlign:"center", fontSize:"20px"}}>
                  <h1>게임 이름</h1>
                </Col>
                <Col span={6} style={{ textAlign:"center", fontSize:"20px"}}>
                  <h1>현재 접속자 수</h1>
                </Col>
                <Col span={6} style={{ textAlign:"center", fontSize:"20px"}}>
                  <h1>가격</h1>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <List
              dataSource={RankingData}
              pagination={{pageSize: 10, total: 30}}
              itemLayout="vertical"
              size="large"
              renderItem={item =>
                <Row justify='center'>
                  <Card style={{width: '100%'}}>
                    <GameInfo {...item}/>
                  </Card>
                </Row>
              }
            />
          </Col>
        </Row>
      </Row>
    </>
  );
}
export default SteamRanking;