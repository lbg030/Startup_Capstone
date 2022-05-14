import React, { useEffect,useState } from 'react';
import { Button, List, Card, Row, Col, Divider } from 'antd';
import { useHistory } from "react-router-dom";
import Posts from "components/BoardComponent/Posts";
import Axios from 'axios';
import 'antd/dist/antd.css';

function Boards({match}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/`)
    .then((res) => {
      res.data.sort((a, b) => {
        return a.postseq - b.postseq;
      });
      setPosts(res.data);
    })
  };
  const writePost = () => {
    history.push(`/boards/${boardseq}/write`);
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq, postseq])
  return (
    <>
      <Row justify = 'center'>
        <Row style={{width:'80%'}}>
          <Divider style={{fontSize: 20, color:"white",backgroundColor:"#2c3341"}}> 
            게시판 
          </Divider>
          <Col span={4} offset={21}>
            <Button type="primary" onClick={writePost}>게시글 쓰기</Button> 
          </Col>
          <Col span={24}>
            <List
              dataSource={posts}
              pagination={{pageSize: 2, total: posts.length}}
              itemLayout="vertical"
              size="large"
              renderItem={item =>
                <Row justify='center'>
                  <Card style={{width: '100%'}}>
                    <Posts key = {item.postseq} boardseq = {boardseq} {...item}/>
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
export default Boards;