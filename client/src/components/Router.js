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
import Posts from "components/sickbird/Posts";

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

            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
      <Route exact path = "/boards/:boardseq" component = {Boards} />
      <Route exact path = "/boards/:boardseq/:postseq" component = {Posts} />
    </Router>
  );
};

export default AppRouter;
