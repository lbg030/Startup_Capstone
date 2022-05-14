import React, { useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import CommentList from "components/BoardComponent/CommentList";
import { message, Button, Divider, Card, Row, Col, PageHeader } from 'antd';
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
      alert("작성자가 아닙니다.");
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
        alert("게시글 삭제 완료");
        history.push(`/boards/${boardseq}`);
      });
    }
    else {
      alert("작성자가 아닙니다.");
    }
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq])
  return (
    <Row justify="center">
      <Card title = {
        <PageHeader
          className="site-page-header"
          title={posts.title}
          subTitle={posts.writer}
        />} extra={
        <Row gutter={8}>
          <Col className="gutter-row" span={12}><Button type="primary" block onClick={modifyPost} style={{width: 105, height: 35, fontSize: 16}}>수정</Button></Col>
          <Col className="gutter-row" span={12}><Button type="primary" block onClick={deletePost} style={{width: 105, height: 35, fontSize: 16}}>삭제</Button></Col>
        </Row>
        } style={{width: '85%'}}>
        <Card bordered = {false}>
          <div>
            {HtmlReactParser(posts.content)}
          </div>
          <CommentList userObj = {userObj} boardseq = {boardseq} postseq = {postseq}/> 
        </Card>     
      </Card>
    </Row>
  );
}

export default PostView;