import React, { Component } from "react";
import { MainShopWrapper, Count, LeftWrapper, RightWrapper } from "./ShopStyle";
import AllCardsComponent from "../CardsComponent/AllCardsComponent";
import SideBar from "../SideBarComponent/SideBar";

class ProductsWrapper extends Component {
  state = {
    products: [
      {
        url: require("../../assests/backpack.jpg"),
        name: "Red Backpacks",
        price: 49,
        offerprice: "",
        quantity: 1,
        id: 0,
      },
      {
        url: require("../../assests/cap.jpg"),
        name: "Cap",
        price: 10,
        offerprice: 6,
        quantity: 1,
        id: 1,
      },
      {
        url: require("../../assests/handbags.jpg"),
        name: "Handbag",
        price: 9,
        offerprice: "",
        quantity: 1,
        id: 2,
      },
      {
        url: require("../../assests/shirt.jpg"),
        name: "Shirt",
        price: 19,
        offerprice: "",
        quantity: 1,
        id: 3,
      },
      {
        url: require("../../assests/shoes.jpg"),
        name: "Casual Shoes",
        price: 79,
        offerprice: "",
        quantity: 1,
        id: 4,
      },
      {
        url: require("../../assests/ties.jpg"),
        name: "Tie",
        price: 9,
        offerprice: "",
        quantity: 1,
        id: 5,
      },
      {
        url: require("../../assests/tshirt.jpg"),
        name: "T-shirt",
        price: 19,
        offerprice: 14,
        quantity: 1,
        id: 6,
      },
      {
        url: require("../../assests/wallet.jpg"),
        name: "Wallet",
        price: 79,
        offerprice: 69,
        quantity: 1,
        id: 7,
      },
      {
        url: require("../../assests/watch.jpg"),
        name: "Tie",
        price: 179,
        offerprice: "",
        quantity: 1,
        id: 8,
      },
      {
        url: require("../../assests/sunglasses.jpg"),
        name: "Sunglasses",
        price: 29,
        offerprice: 25,
        quantity: 1,
        id: 9,
      },
    ],
    selectedProducts: [],
    tempCards: [],
    price: 10,
  };

  handleInputChange = (e) => {
    let input = e.target.value;
    let cards = [];
    if (input.length === 0) {
      this.setState({
        tempCards: [],
      });
    } else {
      let temp = [...this.state.products];
      cards = temp.filter((cards) => {
        // if (temp.name.toLowerCase().includes(input.toLowerCase())) {
        // cards.push(temp);
        return temp.name.toLowerCase().includes(input.toLowerCase());
      });
    }
    this.setState({
      tempCards: cards,
    });
  };

  closeHandler = (id) => {
    let temp = [...this.state.selectedProducts];
    temp.splice(id, id + 1);
    console.log(temp);
    this.setState({
      selectedProducts: temp,
    });
  };

  incrementHandler = (id) => {
    console.log("id: ", id);
    let temp = [...this.state.selectedProducts];
    console.log("increment handler");
    let quantity = 1;
    temp.map((value, key) => {
      console.log("map");
      if (value.id === id) {
        console.log("if 1 ");

        if (value.quantity <= 9) {
          console.log("if 2 ");

          value.quantity = value.quantity + quantity;
          console.log(value.quantity);
        }
      }
    });
    this.setState({
      selectedProducts: temp,
    });
  };

  decrementHandler = (id) => {
    let temp = [...this.state.selectedProducts];
    temp.map((value, key) => {
      if (value.id === id) {
        if (value.quantity >= 1) {
          value.quantity = value.quantity - 1;
        }
      }
    });
    this.setState({
      selectedProducts: temp,
    });
  };

  cartHandler = (id) => {
    let temp = [...this.state.selectedProducts];
    this.state.products.map((value, key) => {
      if (id === key) {
        temp.push(value);
      }
    });
    this.setState({
      selectedProducts: temp,
    });
    console.log("selectedProducts", this.state.selectedProducts);
  };

  handleFilterChange = (event, newValue) => {
    this.setState({
      price: newValue,
    });
  };

  render() {
    return (
      <MainShopWrapper>
        <LeftWrapper>
          <Count>Showing 1–{this.state.products.length} of 23 results</Count>
          <AllCardsComponent
            products={this.state.products}
            tempCards={this.state.tempCards}
            clicked={this.cartHandler}
            filterPrice={this.state.price}
          />
        </LeftWrapper>
        <RightWrapper>
          <SideBar
            selectedProducts={this.state.selectedProducts}
            closeHandler={this.closeHandler}
            incrementHandler={this.incrementHandler}
            decrementHandler={this.decrementHandler}
            handleInputChange={this.handleInputChange}
            price={this.state.price}
            handleFilterChange={this.handleFilterChange}
          />
        </RightWrapper>
      </MainShopWrapper>
    );
  }
}

export default ProductsWrapper;
