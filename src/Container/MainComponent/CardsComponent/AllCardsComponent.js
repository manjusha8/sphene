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
} from "./CardsStyle";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import ProductsNotAvailable from "../../NothingFound/ProductsNotAvailable";

function AllCardsComponent(props) {
  const [isShown, setIsShown] = useState(false);

  let tempCards = props.tempCards;
  let products = props.products;
  if (tempCards.length !== 0) {
    products = tempCards;
  }

  function clickHandler(id) {
    setIsShown(id);
  }

  return (
    <div>
      {products.length !== null ? (
        <Wrapper>
          {products.map((product, index) => {
            if (product.price <= props.filterPrice)
              return (
                <CardWrapper key={index}>
                  <ImageWrapper onMouseOver={() => clickHandler(index)}>
                    <Image src={product.url} alt="products" />
                    <CartIcon
                      active={isShown === index}
                      onClick={() => props.clicked(index)}
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
      ) : (
        <div>
          {" "}
          <ProductsNotAvailable />{" "}
        </div>
      )}
    </div>
  );
}

export default AllCardsComponent;
