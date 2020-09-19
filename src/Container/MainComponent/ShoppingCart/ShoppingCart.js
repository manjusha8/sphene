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
import { withRouter } from "react-router-dom";

import store, {
  CART_COUNTER,
  QUANTITY_INCREMENT,
  QUANTITY_DECREMENT,
  REMOVE_PRODUCT,
  EMPTY_CART,
} from "../../../Redux/Store";
import { connect } from "react-redux";

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
    console.log("selected products: ", props.selectedProducts);
    let count = 0;
    props.selectedProducts.map((value, key) => {
      count = count + value.quantity;
    });
    store.dispatch({ type: CART_COUNTER, value: count });
    return count;
  }

  function shopNavigateHandler(items) {
    props.history.push({
      pathname: "/cart",
      state: {
        data: items,
      },
    });
    store.dispatch({ type: EMPTY_CART });
  }

  useEffect(() => {
    console.log("products in shopping cart: ", props.selectedProducts);
  }, []);

  return (
    <CartWrapper>
      {props.selectedProducts
        ? props.selectedProducts.map((product, index) => (
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
                <CloseWrapper onClick={() => props.closeHandler(index)}>
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
          ))
        : null}
      <TotalWrapper>
        <Count>Count: {count()}</Count>
        <Price>Price:${total()}</Price>
      </TotalWrapper>
      <CheckOutWrapper>
        <CheckOut onClick={() => shopNavigateHandler(props.selectedProducts)}>
          CheckOut
        </CheckOut>
      </CheckOutWrapper>
    </CartWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedProducts: state.selectedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: (id) => {
      const action = { type: QUANTITY_INCREMENT, id: id };
      dispatch(action);
    },
    decrementHandler: (id) => {
      const action = { type: QUANTITY_DECREMENT, id: id };
      dispatch(action);
    },
    closeHandler: (id) => {
      const action = { type: REMOVE_PRODUCT, id: id };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShoppingCart));
