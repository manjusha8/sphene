import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from "../MainComponent/UserAuthentication/Signup";
import Login from "../MainComponent/UserAuthentication/Login";
import Main from "../MainComponent/Main";
import fire from "../Config/Fire";
import { useState } from "react";

function Routing() {
  const [user, setUser] = useState();

  useEffect(() => {
    authListener();
  });

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("in routing : ", user);
      } else {
        setUser("null");
        console.log("in routing user null: ", user);
      }
    });
  }
  return (
    <>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route
          path={["/home", "/shop", "/contact", "/cart"]}
          exact
          render={() => (user ? <Main /> : <Redirect from="/" to="/" />)}
        />
      </Switch>
    </>
  );
}

export default Routing;


state = {
  user: {},
  uid: null,
};


authListener() {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        user: user,
        uid: user.uid,
      });
      console.log(" users in routing : ", this.state.user);
      console.log("user uid: ", this.state.uid);
    } else {
      this.setState({
        user: null,
      });
      console.log(" users in routing user null: ", this.state.user);
    }
  });
}