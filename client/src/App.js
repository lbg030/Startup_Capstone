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

function APP() {
  return (
    <Router>
      <head>
        <title>SteamPack</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="assets/css/main.css"></link>
      </head>
      <body className="homepage is-preload">
        <div id="root">
          <div id="page-wrapper">
            <Header />
            <Highlights />
            <Route exact path = "/" component = {Highlights} />
            <Route exact path = "/" component = {Intro} />
            <Switch>
              
              {/* {
              userObj ? (<Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite userObj={userObj} {...props} />}/>) : (<div>로그인 하세요</div>)
              } */}
              <Route exact path = "/:boardseq/write" render = {(props) => <PostWrite userObj="sickbird" {...props} />} />
              <Route exact path = "/:boardseq/" component = {Boards} />
              <Route exact path = "/:boardseq/:postseq/modify" render = {(props) => <PostModify userObj="sickbird" {...props} />} />
              <Route exact path = "/:boardseq/:postseq" render = {(props) => <PostView userObj="sickbird" {...props} />} />
              <Route exact path = "/" component = {MainContent} />
            </Switch>
            <Footer />
          </div>
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.dropotron.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
        </div>
      </body>
    </Router>
  );
}

export default APP;
