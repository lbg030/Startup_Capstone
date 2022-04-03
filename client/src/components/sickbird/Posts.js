import React,{ useEffect,useState } from 'react';
import HtmlReactParser from 'html-react-parser';
import {dbService} from 'fbase';
function Posts({match}) {
  const { boardseq, postseq } = match.params;
  const [postConf, setPostConf] = useState("");
  const getPostConf = async () => {
    const postRef = dbService.collection("boards").doc("game").collection("posts");
    const snapshot = await postRef.where("postseq", "==", parseInt(postseq)).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    snapshot.forEach(doc => {
      setPostConf(doc.data());
    });
  };
  useEffect(()=>{
    getPostConf();
  }, [boardseq,postseq])
  return (
    <div className="Posts">
      <div style={{ border: '1px solid #333' }}>
        <h2>{postConf.title}</h2>
        <div>
            {postConf.content === undefined ? "" : HtmlReactParser(postConf.content)}
        </div>
      </div>
    </div>
  );
}

export default Posts;