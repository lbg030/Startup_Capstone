import React,{ useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import {dbService} from 'fbase';
import { PresetColorTypes } from 'antd/lib/_util/colors';
function Posts({match}) {
  const { boardseq, postseq } = match.params;
  const [posts, setPosts] = useState("");
  const getPosts = async () => {
    const postRef = dbService.collection("boards").doc("game").collection("posts");
    const snapshot = await postRef.where("postseq", "==", parseInt(postseq)).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    snapshot.forEach(doc => {
      setPosts(doc.data());
    });
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq,postseq])
  return (
    <div className="Posts">
      <div style={{ border: '1px solid #333' }}>
        <h2>{posts.title}</h2>
        <div>
            {posts.content === undefined ? "" : HtmlReactParser(posts.content)}
        </div>
      </div>
    </div>
  );
}

export default Posts;