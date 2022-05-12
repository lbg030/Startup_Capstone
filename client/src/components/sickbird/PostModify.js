import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { message, Input, Button, Row, Card, Col } from 'antd';
import 'antd/dist/antd.css';

function PostModify({match, userObj}) {
  const { boardseq, postseq } = match.params;
  const history = useHistory();
  const [postContent, setPostContent] = useState({
    title: null,
    content: "",
    writer: ""
  });
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq,postContent])
  const getPosts = () => {
    console.log(postContent.writer);
    if(postContent.writer === ""){
      Axios.get(`http://localhost:4000/api/boards/${boardseq}/${postseq}`)
      .then((res) => {
        setPostContent(res.data);
      }).catch((error) => {
        console.log(error);
      })

    }
    else if(postContent.writer !== userObj.displayName){
      alert("작성자가 아닙니다.");
      history.push(`/boards/${boardseq}/${postseq}`);
    }
  };
  const getValue = e => {
    try {
      if(postContent.title !== null && e.target !== undefined) {
        const { value } = e.target;
        setPostContent({
        ...postContent,
        title: value
        })
        console.log(postContent);
      }
    } catch(e) {
      console.log(e);
    }
  }
  const modifyPost = () => {
    Axios.post(`http://localhost:4000/api/boards/${boardseq}/${postseq}/modify`, {
      title: postContent.title,
      content: postContent.content
    }).then(() => {
      alert("게시글 수정 완료!");
      history.push(`/boards/${boardseq}/${postseq}`);
    });
  };
  return (
    <Row justify="center">
      <Card title = {<Input showCount placeholder="제목을 입력해주세요" maxLength={100} value = {postContent.title === null ? "": postContent.title} onChange={getValue}/>} 
      style={{width: '80%'}}>
        <CKEditor
        editor={ ClassicEditor }
        data= {postContent.content}
        config={{placeholder: "내용을 입력해주세요"}}
        onReady={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
          setPostContent({
            ...postContent,
            content: data
          })
        } }
        onBlur={ ( event, editor ) => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
          console.log( 'Focus.', editor );
        } }/>
        <Button type="primary" block onClick={modifyPost}>수정하기</Button>    
      </Card>
    </Row>
  );
}
export default PostModify;