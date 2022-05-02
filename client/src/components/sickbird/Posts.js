import React from 'react';
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';

function Posts(props) {
  return (
      <div style={{ border: '1px solid #333' }}>
        <span>
          <Link to={`/boards/${props.boardseq}/${props.postseq}`}>
            {props.title}
          </Link>
        </span>
        <span>
        {props.writer}
        </span>
      </div>
  );
}
export default Posts;