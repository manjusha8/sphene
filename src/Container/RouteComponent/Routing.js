import React, { useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "../MainComponent/UserAuthentication/Signup";
import Login from "../MainComponent/UserAuthentication/Login";
import fire from "../Config/Fire";
import FeaturedCategories from "../MainComponent/FeaturedCategories/FeaturedCategories";
import Shop from "../MainComponent/ShopComponent/Shop";
import Contact from "../MainComponent/ContactComponent/Contact";
import Cart from "../MainComponent/CartHandler/Cart";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../MainComponent/UserProfileComponent/Profile";
import UserContext from "../Context/UserContext";
import { Component } from "react";

class Routing extends Component {
  state = {
    user: {},
    uid: null,
  };

  componentDidMount() {
    this.authListener();
  }

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

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.uid }}>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          {this.state.user ? (
            <Switch>
              <Route path="/home" exact component={FeaturedCategories} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/profile" exact component={Profile} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default Routing;
