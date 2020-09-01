import React, { useEffect } from "react";
import {
  Wrapper,
  CardWrapper,
  ProductWrapper,
  Description,
  ImageWrapper,
  Image,
  ContentWrapper,
  PriceWrapper,
  Price,
  OfferPrice,
  Delivery,
  Empty,
  TitleBar,
} from "./Style";
import { useState } from "react";

function CheckOut(props) {
  let day = new Date().getDate() + 4;
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  function dateHandler() {
    let date = day + "-" + month + "-" + year;
    return date;
  }

  const desc = ["hi", "hello", "how are you"];
  // const items = props.data.description.map((val) => (
  //   <Description>{val}</Description>
  // ));

  return (
    //  props.data !== undefined ? (
    <Wrapper>
      {/* <Delivery>
        Thank you !! Your order will be delivered by {dateHandler()}
        <div>
          <a href="/shop"> Go Back to Shop </a>
        </div>
      </Delivery>
      {props.data.map((value, index) => (
        <CardWrapper>
          <ProductWrapper>
            <ImageWrapper>
              <Image src={value.url} alt="products" />
            </ImageWrapper>
            <ContentWrapper>
              <div>{value.name}</div>
              <PriceWrapper>
                <Price offerprice={value.offerprice}>{value.price}</Price>
                <OfferPrice offerprice={value.offerprice}>
                  {value.offerprice}
                </OfferPrice>
              </PriceWrapper>
            </ContentWrapper>
          </ProductWrapper>
          {value.description}
          {/* {items} */}
      {/* {console.log("description: ", items)} */}
      {/* </CardWrapper>
      ))} */}
      <Empty>
        {" "}
        <TitleBar>Shopping Cart</TitleBar>
      </Empty>
      <Delivery>
        {" "}
        Why is your cart EMPTY !! Go Back to <a href="/shop">Shop</a>
      </Delivery>
    </Wrapper>
  );
}

export default CheckOut;
