import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {dbService} from 'fbase';
import { Input, Button } from 'antd';

/* 현재는 Game 게시판밖에 게시글 작성이 안되는 점 유의할 것*/

function PostWrite({match}) {
  const { boardseq } = match.params;

  const [postContent, setPostContent] = useState();

  const getTitle = e => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value
    })
    console.log(postContent);
  }
  const getName = e => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value
    })
    console.log(postContent);
  }
  const writePost = async () => {
    const postRef = dbService.collection("boards").doc("game").collection("posts");
    const snapshot = await postRef.add({
      title: postContent.title,
      content: postContent.content,
      writer: postContent.writer
    });
  };
  return (
    <div className="PostEditor">
      <h2>게시글 작성</h2>
      <div>제목 : <Input showCount maxLength={100} onChange={getTitle} /> </div>
      <div>이름 : <Input showCount maxLength={20} onChange={getName} /> </div>
      <CKEditor
        editor={ ClassicEditor }
        data=""
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
        } }
      />
      <Button
        type="primary" block 
        onClick={writePost}
        name='title'
      >입력</Button>
    </div>
  );
}
export default PostWrite;