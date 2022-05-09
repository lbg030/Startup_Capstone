import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";
import Boards from "components/sickbird/Boards";
import PostView from "components/sickbird/PostView";
import PostWrite from "components/sickbird/PostWrite";
import PostModify from "components/sickbird/PostModify";

const AppRouter = ({ refreshUser, userObj }) => {
  return (
    <Router>
      {userObj && <Navigation userObj={userObj} />}
      <Switch>
        {userObj ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            
          </>
        )}
      </Switch>
      <Switch>
        {
          userObj ? (<Route exact path = "/boards/:boardseq/write" render = {(props) => <PostWrite userObj={userObj} {...props} />}/>) : (<div>로그인 하세요</div>)
        }
        <Route exact path = "/boards/:boardseq/" component = {Boards} />
        <Route exact path = "/boards/:boardseq/:postseq/modify" render = {(props) => <PostModify userObj={userObj} {...props} />} />
        <Route exact path = "/boards/:boardseq/:postseq" render = {(props) => <PostView userObj={userObj} {...props} />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
