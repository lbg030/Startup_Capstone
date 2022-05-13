import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import { Form, Button, Input } from 'antd';
import 'antd/dist/antd.css';
const { TextArea } = Input;

function CommentEditor(props){
  const {onChange, onSubmit, submitting, value} = props;
  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          댓글 작성
        </Button>
      </Form.Item>
    </>
  );
};
export default CommentEditor;