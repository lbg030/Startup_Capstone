import React, { useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { Button } from 'antd';
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
    history.push(`/boards/${boardseq}/${postseq}/modify`);
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
    <div className="Posts">
      <Button
        type="primary" block 
        onClick={modifyPost}>수정</Button>
      <Button
        type="primary" block 
        onClick={deletePost}>삭제</Button>
        <div style={{ border: '1px solid #333' }}>
          <h2>{posts.title}</h2>
          <h4>{posts.writer}</h4>
          <div>
            {HtmlReactParser(posts.content)}
          </div>
        </div>
    </div>
  );
}

export default PostView;