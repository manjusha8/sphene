import React, { useEffect, useContext } from "react";
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
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import fire from "../../Config/Fire";
import StateContext from "../../Context/StateContext";
import { useState } from "react";

function ShoppingCart(props) {
  const { selectedProducts } = useContext(StateContext);
  const { closeHandler } = useContext(StateContext);
  const { incrementHandler } = useContext(StateContext);
  const { decrementHandler } = useContext(StateContext);

  const [cards, setCards] = useState([]);

  function total() {
    let price = 0;
    selectedProducts.map((value, key) => {
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
    selectedProducts.map((value, key) => {
      count = count + value.quantity;
    });
    return count;
  }

  useEffect(() => {
    console.log("useEffect");
    let tempCards = [];
    // let cards = [];
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(fire.auth().currentUser.uid);
    let checkout = uid.child("checkout");

    checkout.on("value", (snapshot) => {
      console.log("snapshot :", snapshot.val());
      for (let key in snapshot.val()) {
        tempCards.push({
          id: key,
          value: snapshot.val()[key],
        });
      }

      console.log("tempCards : ", tempCards);

      setCards(tempCards);
    });

    // checkout.set({
    //   products: selectedProducts,
    // });
  }, []);

  function shopNavigateHandler(items) {
    // let db = firebase.database();
    // let users = db.ref().child("users");
    // let uid = users.child(fire.auth().currentUser.uid);
    // uid.child("checkout").remove();
    props.history.push({
      pathname: "/cart",
      state: {
        data: items,
      },
    });
  }

  return (
    <CartWrapper>
      {cards.length > 0 ? (
        <div>
          {cards.map((cards, index) => {
            console.log("tempCards id: ", cards.id, cards.value);
            cards.value.map((product, index) => (
              <CardWrapper key={product.id}>
                {console.log(
                  "cards id and cards name: ",
                  product.id,
                  product.name
                )}
                <ImageWrapper>
                  <Image
                    src={require(`../../assests/${product.url}`)}
                    alt="products"
                  />
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
                  <CloseWrapper onClick={() => closeHandler(index)}>
                    <FaTimes />
                  </CloseWrapper>
                  <QuantityWrapper>
                    <IncrementWrapper>
                      <FaPlusSquare
                        onClick={() => incrementHandler(product.id)}
                      />
                    </IncrementWrapper>
                    <DecrementWrapper>
                      <FaMinusSquare
                        onClick={() => decrementHandler(product.id)}
                      />
                    </DecrementWrapper>
                  </QuantityWrapper>
                </ContentWrapper>
              </CardWrapper>
            ));
          })}
        </div>
      ) : (
        <div>no items in cart </div>
      )}
      <TotalWrapper>
        <Count>Count: {count()}</Count>
        <Price>Price:${total()}</Price>
      </TotalWrapper>
      <CheckOutWrapper>
        <CheckOut onClick={() => shopNavigateHandler(selectedProducts)}>
          CheckOut
        </CheckOut>
      </CheckOutWrapper>
    </CartWrapper>
  );
}

export default withRouter(ShoppingCart);
