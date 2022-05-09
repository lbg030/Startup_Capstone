import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CommentData from "components/sickbird/CommentData";
import CommentEditor from "components/sickbird/CommentEditor";
import moment from 'moment';
import 'antd/dist/antd.css';
const { TextArea } = Input;

function CommentList({userObj, boardseq, postseq}) {
  const [element , setElement] = useState({
    comments: [],
    submitting: false,
    value: '',
    seq: null
  });
  const getComments = () => {
    Axios.get(`http://localhost:4000/api/comments/${boardseq}/${postseq}`)
    .then((res) => {
      let arr = [];
      res.data.map((data) => {
        arr.push({
          author: data.writer,
          content: <p>{data.content}</p>,
          datetime: data.commented,
          seq: data.seq
        });
      });
      setElement({
        submitting: false,
        value: '',
        comments: arr
      });
      console.log(arr);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(()=>{
    getComments();
  }, [element.submitting, boardseq, postseq]);
  const handleSubmit = async () => {
    if (!element.value) {
      message.warning("내용을 입력해주세요.");
      return;
    }
    setElement({
      ...element,
      submitting: true
    });
    Axios.post(`http://localhost:4000/api/comments/${boardseq}/${postseq}/write`, {
      writer: userObj.displayName,
      content: element.value,
      commented: moment().format('YYYY-MM-DD HH:mm'),
    }).then(() => {
      message.success("등록 완료!");
      setElement({
        ...element,
        submitting: false,
        value: '',
      });
    });
  };

  const handleChange = e => {
    setElement({
      ...element,
      value: e.target.value
    });
  };
  return (
    <>
      {element.comments.length > 0 && <CommentData comments={element.comments} />}
      <Comment
        avatar={<Avatar icon={<UserOutlined />} alt={userObj.displayName} />}
        content={
          <CommentEditor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={element.submitting}
            value={element.value}
          />
        }
      />
    </>
  );
}

export default CommentList;