import React, { useEffect,useState } from 'react';
import { Comment, Avatar, List, Card, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import CommentEditor from "components/sickbird/CommentEditor";

function CommentData (props) {
  const {comments} = props;
  const [comment , setModified] = useState({
    modifySeq: 0,
    value: ''
  });
  
  // const commentChange = e => {
  //   console.log(e.target.value);
  //   setModified({
  //     ...comment,
  //     value: <p>{e.target.value}</p>
  //   });
  // };

  // const commentModify = (seq) => {
  //   console.log("seq: " + seq + " modifySeq: " + comment.modifySeq);
  //   setModified({
  //     ...comment,
  //     modifySeq: seq
  //   });
  // }
  return (
    <>
      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={item =>
          //item.seq === modifySeq ? 
          // <CommentEditor
          //   onChange={console.log(item.content.props.children)}
          //   submitting={item.submitting}
          //   value={item.content.props.children}/>
          //: 
          <Card size = "small">
            <Comment avatar = {<Avatar icon={<UserOutlined />} alt={item.writer} />} 
            actions = {[<span key="comment-list-reply-to-0">수정</span>, <span key="comment-list-reply-to-0">삭제</span>]} {...item}>
            </Comment>
          </Card>
        }
      />
    </>
  );
};
export default CommentData;