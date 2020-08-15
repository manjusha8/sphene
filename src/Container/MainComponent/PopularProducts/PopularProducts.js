import React, { useState } from "react";
import {
  PopularProductsWrapper,
  Wrapper,
  ImageWrapper,
  Image,
  ContentWrapper,
  ProductName,
  ProductPrice,
  OfferPrice,
} from "./Style";

function PopularProducts() {
  const [products] = useState([
    {
      url: require("../../assests/backpack.jpg"),
      name: "Red Backpacks",
      price: 49,
      offerprice: "",
    },
    {
      url: require("../../assests/cap.jpg"),
      name: "Cap",
      price: 10,
      offerprice: 6,
    },
    {
      url: require("../../assests/sunglasses.jpg"),
      name: "Sunglasses",
      price: 29,
      offerprice: 25,
    },
  ]);

  return (
    <PopularProductsWrapper>
      {products.map((products, index) => (
        <Wrapper key={index}>
          <ImageWrapper>
            <Image src={products.url} alt="products" />
          </ImageWrapper>
          <ContentWrapper>
            <ProductName>{products.name}</ProductName>
            <ProductPrice offerprice={products.offerprice}>
              ${products.price}
            </ProductPrice>
            <OfferPrice offerprice={products.offerprice}>
              ${products.offerprice}
            </OfferPrice>
          </ContentWrapper>
        </Wrapper>
      ))}
    </PopularProductsWrapper>
  );
}

export default PopularProducts;
