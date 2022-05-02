import React, { useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import Axios from 'axios';

function PostView({match}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/${postseq}`)
    .then((res) => {
      setPosts(res.data);
    })
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq])
  return (
    <div className="Posts">
      {posts.map(element =>
        <div style={{ border: '1px solid #333' }}>
          <h2>{element.writer}</h2>
          <div>
            {HtmlReactParser(element.content)}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostView;