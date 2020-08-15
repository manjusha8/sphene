import React, { useEffect } from "react";
import Header from "../CommonComponents/Header";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import Footer from "../CommonComponents/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Shop from "./ShopComponent/Shop";

function Main() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={FeaturedCategories} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Main;
