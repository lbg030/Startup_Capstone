import React, { useEffect,useState } from 'react';
import { Button, List, Card, Row, Col, Divider } from 'antd';
import { useHistory } from "react-router-dom";
import GameInfo from "components/RankingComponent/GameInfo";
import {RankingData} from './RankingData';

import 'antd/dist/antd.css';
function SteamRanking() {
  return (
    <>
      <Row justify = 'center'>
        <Divider style={{fontSize: 20, color:"white", backgroundColor:"#2c3341"}}> 
            스팀게임 인기순위
        </Divider>
        <Row style={{width:'80%'}}>
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