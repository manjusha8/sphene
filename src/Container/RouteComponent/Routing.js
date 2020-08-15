import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "../MainComponent/UserAuthentication/Signup";
import Login from "../MainComponent/UserAuthentication/Login";
import Main from "../MainComponent/Main";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route
            path={["/home", "/shop", "/contact"]}
            exact
            render={() => <Main />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routing;
