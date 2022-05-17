import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Boards from "components/BoardComponent/Boards";
import PostView from "components/BoardComponent/PostView";
import PostWrite from "components/BoardComponent/PostWrite";
import PostModify from "components/BoardComponent/PostModify";
import SaleInfo from "components/SaleInfo";
import MainContent from './components/MainContent';
import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
import MbtiStart from './components/MbtiComponent/MbtiStart';
import MbtiTest from './components/MbtiComponent/MbtiTest';
import MbtiResult from './components/MbtiComponent/MbtiResult';
// import Login from './components/Main';
//import './assets/css/main.css';
function APP() {
  return (
    <html>
      <head>
        <title>SteamPack</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body className="homepage is-preload">
        <div id="root">
          <div id="page-wrapper">
            <Header />
            <Route exact path = "/" component = {SaleInfo} />
            <Route exact path = "/" component = {Intro} />
            <Switch>
              
              {/* {
              userObj ? (<Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite userObj={userObj} {...props} />}/>) : (<div>로그인 하세요</div>)
              } */}
              <Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite {...props} userObj={{displayName : "sickbird"}} />} />
              <Route exact path = "/boards/:boardseq/" component = {Boards} />
              <Route exact path = "/boards/:boardseq/:postseq/modify" render = {(props) => <PostModify userObj={{displayName : "sickbird"}} {...props} />} />
              <Route exact path = "/boards/:boardseq/:postseq" render = {(props) => <PostView userObj={{displayName : "sickbird"}} {...props} />} />
              <Route exact path = "/mbti/result/:gameNum" component = {MbtiResult} />
              <Route exact path = "/mbti/test" component = {MbtiTest} />
              <Route exact path = "/mbti" component = {MbtiStart} />
              <Route exact path = "/" component = {MainContent} />
            </Switch>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

export default APP;
