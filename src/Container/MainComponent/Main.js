import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import Shop from "./ShopComponent/Shop";
import Contact from "./ContactComponent/Contact";
import Cart from "./CartHandler/Cart";
import RelatedProducts from "../MainComponent/RelatedProducts/RelatedProducts";
import PageNotFound from "../PageNotFound/PageNotFound";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={FeaturedCategories} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/relatedproducts" exact component={RelatedProducts} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </>
  );
}

export default Main;
