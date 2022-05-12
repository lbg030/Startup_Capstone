import React, { useEffect,useState } from 'react';
import { List, Card, Row, Col, Pagination } from 'antd';
import Posts from "components/sickbird/Posts";
import Axios from 'axios';
import 'antd/dist/antd.css';

function Boards({match}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/`)
    .then((res) => {
      res.data.sort((a, b) => {
        return a.postseq - b.postseq;
      });
      setPosts(res.data);
    })
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq, postseq])
  return (
    <>
      <Row justify = 'center'>
        <Row style={{width:'80%'}}>
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