import React,{ useEffect,useState } from 'react';
import { dbService } from 'fbase';
import { Timestamp } from "firebase/firestore"
function Boards({match}) {
  const { boardseq } = match.params;
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const postRef = dbService.collection("boards").doc("game").collection("posts").orderBy("postseq");
    const snapshot = await postRef.get();
    const postList = [];
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    snapshot.forEach(doc => {
      postList.push(doc.data());
    });
    setPosts(postList);
  };
  useEffect(()=>{
    getPosts();
  }, [boardseq])
  return (
    <div className="Boards">
      {posts.map(element =>
        <div style={{ border: '1px solid #333' }}>
          <h3>{element.title}</h3>
          <h3>{element.writer}</h3> 
          <h3>{JSON.stringify(element.created)}</h3>
        </div>
      )}
    </div>
  );
}
export default Boards;