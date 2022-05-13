import React, { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import {infoList, qnaList} from './MbtiData'
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/mbti-default.css';
// import '../../assets/css/mbti-qna.css';
// import '../../assets/css/mbti-result.css';

function MbtiTest() {
  const [element , setElement] = useState({
    questionNum: 0,
    isStarted: false,
    select: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    point: 0
  });
  const qna = document.querySelector("#qna");
  const result = document.querySelector("#result");

  const endPoint = 12;

  function setResult(){
    const cal = (element.select).indexOf(Math.max(...element.select));
    setElement({...element, point: cal});
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[element.point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    const imgURL = `images/image-${element.point}.png`;
    resultImg.src = imgURL;
    resultImg.alt = element.point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[element.point].desc;
  }

  function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block"
      }, 450)})
      setResult();
  }

  function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
      var children = document.querySelectorAll('.answerList');
      for(let i = 0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].ansList[idx].type;
        for(let i = 0; i < target.length; i++){
          element.select[target[i]] += 1;
        }

        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      },450)
    }, false);
  }

  function goNext(qIdx){
    if(qIdx === endPoint){
      goResult();
      return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].question;
    for(let i in qnaList[qIdx].ansList){
      addAnswer(qnaList[qIdx].ansList[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%'; //퍼센트 공식
  }
  useEffect(()=>{
    setElement({...element});
  }, [element.isStarted, element.questionNum]);
  return (
    <div class="container">
      {(element.questionNum !== endPoint) ?
        (<section id="result" class="mx-auto my-5 py-5 px-3">
          <h1>당신의 추천하는 게임은</h1>
          <div class="resultname">
            {infoList[element.point].name}
          </div>
          <div id="resultImg" class="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
            <img class="img-fluid" src={`/images/image-${element.point}.png`}/>
          </div>
          <div class="resultDesc">
            {infoList[element.point].desc}
          </div>
          <button type="button" class="kakao mt-3 py-2 px-3" onclick="">end</button>
        </section>) : 
        (<section id="qna">
        <div class="status mx-auto mt-5">
          <div class="statusBar">
          </div>
        </div>
        <div class="qBox my-5 py-3 mx-auto">

        </div>
        <div class="answerBox">

        </div>
      </section>)
      }
    </div>
  );
}
export default MbtiTest;