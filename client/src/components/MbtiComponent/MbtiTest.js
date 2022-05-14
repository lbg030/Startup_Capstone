import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { Progress, Button, Divider, Row, Col, List, Card} from 'antd';
import { qnaList } from './MbtiData'
function MbtiTest() {
  const [element , setElement] = useState({
    q: qnaList,
    questionNum: 0,
    percent: 0,
    select: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  const history = useHistory();
  const TestBegin = () => {
    //history.push("/mbti");
  };
  const selectAnswer = (ans) => {
    let tempArr = element.select;
    console.log(tempArr);
    console.log(ans);
    for(let i = 0; i < ans.length; i++){
      console.log(ans[i]);
      tempArr[ans[i]]++;
    }
    setElement({...element, percent: 100 * (element.questionNum + 1) / 12, select: tempArr, questionNum: element.questionNum + 1});
    console.log(element.questionNum);
    if(element.questionNum === 11){
      console.log("complete");
      const gameNum = (element.select).indexOf(Math.max(...element.select));
      history.push(`/mbti/result/${gameNum}`);
      return;
    }
  }
  useEffect(()=>{
    setElement({...element});
  }, []);
  return (
    <Row justify="center">
      <Divider style = {{'background-color':'#e0e0e0'}}/>
      <Row gutter={[16, 24]} style={{width:"80%", backgroundColor:"#2c3341"}}>
        <Col span={24}>
          <Row justify='center'>
            <Progress percent={element.questionNum === 12 ? 100 : element.percent} showInfo={false}/>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            {element.questionNum === 12 ? "" : element.q[element.questionNum].questString === undefined ? "" : element.q[element.questionNum].questString}
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            {element.questionNum == 12 ? "" :
            <List
              dataSource={element.q[element.questionNum].ansList}
              itemLayout="vertical"
              size="large"
              renderItem={item =>
                <Row justify='center'>
                  <Card style={{width: '100%', backgroundColor:"#2c3341"}}>
                    <Button block onClick={() => selectAnswer(item.type)}>{item.answer}</Button>
                  </Card>
                </Row>
              }
            />}
          </Row>
        </Col>
        <Col span={24} />
      </Row>
      <Divider style = {{'background-color':'#e0e0e0'}}/>
    </Row>
  );
}
export default MbtiTest;