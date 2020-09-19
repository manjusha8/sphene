import React, { useContext } from "react";
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
import StateContext from "../../Context/StateContext";
import store, { WISH_LIST } from "../../../Redux/Store";

function AllCardsComponent() {
  const [isShown, setIsShown] = useState(false);

  const { filterPrice } = useContext(StateContext);
  const { notAvailable } = useContext(StateContext);
  const { tempCards } = useContext(StateContext);
  const { products } = useContext(StateContext);

  let cards = products;
  if (tempCards.length !== 0) {
    cards = tempCards;
  }
  function clickHandler(id) {
    setIsShown(id);
  }

  return (
    <div>
      {!notAvailable ? (
        <Wrapper>
          {cards.map((product, index) => {
            if (product.price <= filterPrice) {
              return (
                <CardWrapper key={index}>
                  <ImageWrapper onMouseOver={() => clickHandler(index)}>
                    <Image
                      src={require(`../../assests/${product.url}`)}
                      alt="products"
                    />
                    <CartIcon
                      active={isShown === index}
                      onClick={() =>
                        store.dispatch({ type: WISH_LIST, value: product })
                      }
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
            }
          })}
        </Wrapper>
      ) : (
        <div>
          <ProductsNotAvailable />
        </div>
      )}
    </div>
  );
}

export default AllCardsComponent;
