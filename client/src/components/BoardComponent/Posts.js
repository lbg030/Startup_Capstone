import React from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

function Posts(props) {
  const { boardseq, postseq, title, writer} = props;
  return (
      <div>
        <span>
          <Link to={`/boards/${boardseq}/${postseq}`}>
            {title}
          </Link>
        </span>
        <span> {writer} </span>
      </div>
  );
}
export default Posts;