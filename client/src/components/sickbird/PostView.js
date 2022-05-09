import React, { useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import CommentList from "components/sickbird/CommentList";
import { message, Button, Divider, Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
function PostView({match, userObj}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState({
    title: "",
    writer: "",
    content: ""
  });
  const history = useHistory();
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/${postseq}`)
    .then((res) => {
      setPosts(res.data);
    }).catch((error) => {
      console.log(error);
    })
  };
  const modifyPost = () => {
    if(posts.writer !== userObj.displayName) {
      message.warning("작성자가 아닙니다.");
    }
    else {
      history.push(`/boards/${boardseq}/${postseq}/modify`);
    }
  };
  const deletePost = () => {
    if(userObj.displayName === posts.writer){
      Axios.post(`http://localhost:4000/api/boards/${boardseq}/${postseq}/remove`, {
        writer: posts.writer
      })
      .then((res) => {
        message.success("게시글 삭제 완료");
        history.push(`/boards/${boardseq}`);
      });
    }
    else {
      message.warning("작성자가 아닙니다.");
    }
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq])
  return (
    <Card title={posts.title} extra={
    <Row gutter={8}>
      <Col className="gutter-row" span={12}><Button type="primary" block onClick={modifyPost}>수정</Button></Col>
      <Col className="gutter-row" span={12}><Button type="primary" block onClick={deletePost}>삭제</Button></Col>
    </Row>
    } style={{width: '80%'}}>
      <Divider plain />
      <div>
        <h4>{posts.writer}</h4>
        <div>
          {HtmlReactParser(posts.content)}
        </div>
      </div>
      <Divider plain />
      <CommentList userObj = {userObj} boardseq = {boardseq} postseq = {postseq}/>      
    </Card>
  );
}

export default PostView;