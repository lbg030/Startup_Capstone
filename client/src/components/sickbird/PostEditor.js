import { useState } from 'react';
import Axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input, Button } from 'antd';
import {useParams} from 'react-router-dom';

function PostEditor() {
  const { boardseq } = useParams();

  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
    writer: 'sickbird'
  });

  const getValue = e => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value
    })
    console.log(postContent);
  }

  const writePost = () => {
    Axios.post(`http://localhost:4000/api/boards/${boardseq}/write`, {
      title: postContent.title,
      content: postContent.content,
      writer: postContent.writer
    }).then(() => {
      alert("등록 완료!");
    });
  };
  return (
    <div className="PostEditor">
      <h2>게시글 작성</h2>
      <div><Input showCount maxLength={100} onChange={getValue} /></div>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
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
export default PostEditor;