import React, { useEffect } from "react";
import { SideBarWrapper, Title } from "./Style";
import Search from "../SearchComponent/Search";
import Filter from "../../FilterComponent/Filter";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import PopularProducts from "../PopularProducts/PopularProducts";
import Sort from "../SortComponent/Sort";

function SideBar(props) {
  return (
    <SideBarWrapper>
      <Title>Search</Title>
      <Search
      // handleInputChange={props.handleInputChange}
      />
      <Filter
      // price={props.price}
      // handleFilterChange={props.handleFilterChange}
      />
      <Title>Shopping Cart</Title>
      <ShoppingCart
      // selectedProducts={props.selectedProducts}
      // closeHandler={props.closeHandler}
      // incrementHandler={props.incrementHandler}
      // decrementHandler={props.decrementHandler}
      />
      <Title>Popular Products</Title>
      <PopularProducts
      // products={props.products}
      />
      <Title>Sort By</Title>
      <Sort
      // onSorting={props.onSorting}
      />
    </SideBarWrapper>
  );
}

export default SideBar;
