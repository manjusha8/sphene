import React, { useEffect } from "react";
import { SideBarWrapper, Title } from "./Style";
import Search from "../SearchComponent/Search";
import Filter from "../../FilterComponent/Filter";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import PopularProducts from "../PopularProducts/PopularProducts";

function SideBar(props) {
  return (
    <SideBarWrapper>
      <Title>Search</Title>
      <Search handleInputChange={props.handleInputChange} />
      <Filter
        price={props.price}
        handleFilterChange={props.handleFilterChange}
      />
      <Title>Shopping Cart</Title>
      <ShoppingCart
        selectedProducts={props.selectedProducts}
        closeHandler={props.closeHandler}
        incrementHandler={props.incrementHandler}
        decrementHandler={props.decrementHandler}
      />
      <Title>Popular Products</Title>
      <PopularProducts />
    </SideBarWrapper>
  );
}

export default SideBar;
