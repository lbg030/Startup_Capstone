import React, { useEffect,useState } from 'react';
import Posts from "components/sickbird/Posts";
import Axios from 'axios';

function Boards({match}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/`)
    .then((res) => {
      setPosts(res.data);
    })
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq])
  return (
    <div className="Boards">
      {posts.map(element =>
        <Posts postseq = {element.postseq} boardseq = {boardseq} title = {element.title} writer = {element.writer}/>
      )}
    </div>
  );
}

export default Boards;