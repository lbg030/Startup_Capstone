import { useState } from 'react';
import Axios from "axios";
import {useParams} from 'react-router-dom';

function Boards() {
  const { boardseq } = useParams();
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default Boards;