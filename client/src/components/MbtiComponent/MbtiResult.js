import React from "react";
import {infoList} from './MbtiData'
import { useHistory } from "react-router-dom";
import { Button, Divider, Row, Col, Image} from 'antd';
import 'antd/dist/antd.css';
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/mbti-default.css';
// import '../../assets/css/mbti-qna.css';
// import '../../assets/css/mbti-result.css';

function MbtiTest({match}) {
  const { gameNum } = match.params;
  const history = useHistory();
  const goStart = () => {
    history.push("/mbti");
    return;
  };
  return (
    <Row justify="center">
      <Divider style = {{'background-color':'#e0e0e0'}}/>
      <Row gutter={[16, 24]} style={{width:"80%", backgroundColor:"#2c3341"}}>
        <Col span={24}>
          <Row justify='center'>
            <h1 style={{fontSize:30, color:"white", marginTop:30}}>당신의 추천 게임은 {infoList[gameNum].name}</h1>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Image width={800} src={require(`images/image-${gameNum}.png`)} preview={false}/>
          </Row>
        </Col>
        <Col span={24} style={{color:"white"}}>
          <Row justify='center'>
            <p>{infoList[gameNum].desc}</p>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Button onClick={goStart}>처음으로</Button>
          </Row>
        </Col>
      </Row>
      <Divider style = {{'background-color':'#e0e0e0'}}/>
    </Row>
  );
}
export default MbtiTest;