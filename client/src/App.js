import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Main from "./components/Main";
import Boards from "components/sickbird/Boards";
import PostView from "components/sickbird/PostView";
import PostWrite from "components/sickbird/PostWrite";
import PostModify from "components/sickbird/PostModify";
import Highlights from "components/Highlights";
import MainContent from './components/MainContent';
import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
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
            <Route exact path = "/" component = {Highlights} />
            <Route exact path = "/" component = {Intro} />
            <Switch>
              {/* {
              userObj ? (<Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite userObj={userObj} {...props} />}/>) : (<div>로그인 하세요</div>)
              } */}
              <Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite userObj="sickbird" {...props} />} />
              <Route exact path = "/boards/:boardseq/" component = {Boards} />
              <Route exact path = "/boards/:boardseq/:postseq/modify" render = {(props) => <PostModify userObj="sickbird" {...props} />} />
              <Route exact path = "/boards/:boardseq/:postseq" render = {(props) => <PostView userObj="sickbird" {...props} />} />
              <Route exact path = "/" component = {MainContent} />
              <Redirect path="*" to="/" />
            </Switch>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

export default APP;
