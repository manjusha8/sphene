import React, { useEffect } from "react";
import {
  Wrapper,
  CardWrapper,
  ImageWrapper,
  Image,
  CartIcon,
  IconWrapper,
  ContentWrapper,
  ProductName,
  Price,
  ProductPrice,
  OfferPrice,
} from "../CardsComponent/CardsStyle";
import { FaShoppingCart } from "react-icons/fa";

function RelatedCards(props) {
  return (
    <>
      <Wrapper>
        {props.products.map((product, index) => {
          //   if (product.price <= props.filterPrice)

          return (
            <CardWrapper key={index}>
              <ImageWrapper
              //  onMouseOver={() => clickHandler(index)}
              >
                <Image src={product.image} alt="products" />
                <CartIcon
                // active={isShown === index}
                // onClick={() => props.clicked(product)}
                >
                  <IconWrapper>
                    <FaShoppingCart color={"#fff"} />
                  </IconWrapper>
                </CartIcon>
              </ImageWrapper>
              <ContentWrapper>
                <ProductName>{product.name}</ProductName>
                <Price>
                  <ProductPrice offerPrice={product.offerprice}>
                    ${product.price}
                  </ProductPrice>
                  <OfferPrice offerprice={product.offerprice}>
                    ${product.offerprice}
                  </OfferPrice>
                </Price>
              </ContentWrapper>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}

export default RelatedCards;
