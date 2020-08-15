import React, { useEffect } from "react";
import {
  CartWrapper,
  CardWrapper,
  ImageWrapper,
  Image,
  ContentWrapper,
  CloseWrapper,
  QuantityWrapper,
  Quantity,
  IncrementWrapper,
  DecrementWrapper,
  ProductName,
  ProductPrice,
  OfferPrice,
  TotalWrapper,
  Price,
  Count,
  CheckOutWrapper,
  CheckOut,
} from "./Style";
import { FaTimes, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useState } from "react";

function ShoppingCart(props) {
  function total() {
    let price = 0;
    props.selectedProducts.map((value, key) => {
      if (value.offerprice) {
        price = value.quantity * value.offerprice + price;
      } else {
        price = value.quantity * value.price + price;
      }
    });
    return price;
  }

  function count() {
    let count = 0;
    props.selectedProducts.map((value, key) => {
      count = count + value.quantity;
    });
    return count;
  }

  return (
    <CartWrapper>
      {props.selectedProducts.map((product, key) => (
        <CardWrapper key={key}>
          <ImageWrapper>
            <Image src={product.url} alt="products" />
          </ImageWrapper>
          <ContentWrapper>
            <ProductName>{product.name}</ProductName>
            <ProductPrice offerprice={product.offerprice}>
              ${product.price}
            </ProductPrice>
            <OfferPrice offerprice={product.offerprice}>
              ${product.offerprice}
            </OfferPrice>
            <Quantity>Quantity :{product.quantity}</Quantity>
            <CloseWrapper onClick={() => props.closeHandler(key)}>
              <FaTimes />
            </CloseWrapper>
            <QuantityWrapper>
              <IncrementWrapper>
                <FaPlusSquare
                  onClick={() => props.incrementHandler(product.id)}
                />
              </IncrementWrapper>
              <DecrementWrapper>
                <FaMinusSquare
                  onClick={() => props.decrementHandler(product.id)}
                />
              </DecrementWrapper>
            </QuantityWrapper>
          </ContentWrapper>
        </CardWrapper>
      ))}
      <TotalWrapper>
        <Count>Count: {count()}</Count>
        <Price>Price:${total()}</Price>
      </TotalWrapper>
      <CheckOutWrapper>
        <CheckOut>CheckOut</CheckOut>
      </CheckOutWrapper>
    </CartWrapper>
  );
}

export default ShoppingCart;
