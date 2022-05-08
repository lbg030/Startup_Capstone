import React, { useEffect,useState } from 'react';
import { List, Card } from 'antd';
import Posts from "components/sickbird/Posts";
import Axios from 'axios';

function Boards({match}) {
  const { boardseq,postseq } = match.params;
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    Axios.get(`http://localhost:4000/api/boards/${boardseq}/`)
    .then((res) => {
      res.data.sort((a, b) => {
        return a.postseq - b.postseq;
      });
      setPosts(res.data);
    })
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq, postseq])
  return (
    <>
      <List
        dataSource={posts}
        itemLayout="horizontal"
        renderItem={item =>
          <Card>
            <Posts key = {item.postseq} boardseq = {boardseq} {...item}/>
          </Card>
        }
      />
    </>
  );
}

export default Boards;