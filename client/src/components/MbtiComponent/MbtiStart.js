import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Divider, Row, Col, Image} from 'antd';
import 'antd/dist/antd.css';
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/mbti-default.css';
// import '../../assets/css/mbti-main.css';

function MbtiStart() {
  const history = useHistory();
  const TestBegin = () => {
    history.push("/mbti/test");
  };
  return (
    <Row justify="center">
      <Divider style = {{'background-color':'#e0e0e0'}}/>
      <Row gutter={[16, 24]} style={{width:"80%", backgroundColor:"#2c3341"}}>
        <Col span={24}>
          <Row justify='center'>
            <h1 style={{fontSize:30, color:"white", marginTop:30}}>좋아하는 게임 장르 테스트</h1>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1649774637" preview={false}/>
            <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444" preview={false}/>
            <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/460950/header.jpg?t=1622217167" preview={false}/>
            <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg?t=1592339399" preview={false}/>
          </Row>
        </Col>
        <Col span={24} style={{color:"white"}}>
          <Row justify='center'>
            <p>시작하기 버튼을 눌러주세요.</p>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Button onClick={TestBegin}>시작하기</Button>
          </Row>
        </Col>
      </Row>
      <Divider style = {{'background-color':'#e0e0e0'}}/>
    </Row>
  );
}
export default MbtiStart;