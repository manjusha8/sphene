import React from "react";
import { SideBarWrapper, Title } from "./Style";
import Search from "../SearchComponent/Search";
import Filter from "../../FilterComponent/Filter";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import PopularProducts from "../PopularProducts/PopularProducts";
import Sort from "../SortComponent/Sort";

function SideBar() {
  return (
    <SideBarWrapper>
      <Title>Search</Title>
      <Search />
      <Filter />
      <Title>Shopping Cart</Title>
      <ShoppingCart />
      <Title>Popular Products</Title>
      <PopularProducts />
      <Title>Sort By</Title>
      <Sort />
    </SideBarWrapper>
  );
}

export default SideBar;
