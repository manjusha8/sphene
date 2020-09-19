import React, { useContext } from "react";
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
import StateContext from "../../Context/StateContext";

function PopularProducts() {
  const { products } = useContext(StateContext);

  return (
    <PopularProductsWrapper>
      {products.map((products, index) => {
        if (products.offerprice) {
          return (
            <Wrapper key={index}>
              <ImageWrapper>
                <Image
                  src={require(`../../assests/${products.url}`)}
                  alt="products"
                />
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
          );
        }
      })}
    </PopularProductsWrapper>
  );
}

export default PopularProducts;
