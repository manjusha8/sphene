import React, { Component } from "react";
import { MainShopWrapper, Count, LeftWrapper, RightWrapper } from "./ShopStyle";
import AllCardsComponent from "../CardsComponent/AllCardsComponent";
import SideBar from "../SideBarComponent/SideBar";
import ImageSideBar from "../ImageSideBar/ImageSideBar";
import instance from "../../Axios/axios";
import Loader from "../../Loader/Loader";
import firebase from "firebase";
import fire from "../../Config/Fire";
import StateContext from "../../Context/StateContext";
import DispatchContext from "../../Context/DispatchContext";

class ProductsWrapper extends Component {
  state = {
    products: [],
    selectedProducts: [],
    tempCards: [],
    price: 10,
    notAvailable: false,
    loading: true,
    media: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      instance
        .get("/.json")
        .then((response) => {
          console.log("response data: ", response.data.ShopProducts);
          this.setState({
            loading: false,
            products: response.data.ShopProducts,
          });
        })
        .catch((err) => console.log(err));
    }, 2000);
  }

  handleInputChange = (e) => {
    let input = e.target.value;
    let cards = [];
    let notAvailable = false;
    if (input.length === 0) {
      this.setState({
        tempCards: [],
      });
    } else {
      let temp = [...this.state.products];
      cards = temp.filter((cards) => {
        return cards.name.toLowerCase().includes(input.toLowerCase());
      });
      if (cards.length === 0) {
        notAvailable = true;
        console.log("handle input: ", notAvailable);
      }
      console.log("handle input cards length: ", cards.length);
      console.log("handle input cards : ", cards);
    }
    this.setState({
      tempCards: cards,
      notAvailable: notAvailable,
    });
    console.log("state available: ", this.state.notAvailable);
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
        if (value.quantity > 1) {
          value.quantity = value.quantity - 1;
        }
      }
    });
    this.setState({
      selectedProducts: temp,
    });
  };

  cartHandler = (product) => {
    // console.log("products: ", product);
    let temp = [...this.state.selectedProducts];
    let flag = false;
    if (this.state.selectedProducts.length !== 0) {
      this.state.selectedProducts.map((value, index) => {
        if (value.id === product.id) {
          flag = true;
        }
      });
    }
    if (this.state.selectedProducts.length === 0 || !flag) {
      temp.push(product);
    }

    this.setState({
      selectedProducts: temp,
    });
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(fire.auth().currentUser.uid);
    let checkout = uid.child("checkout");
    checkout.set({
      products: [...this.state.selectedProducts],
    });

    console.log("selectedProducts", this.state.selectedProducts);
  };

  handleFilterChange = (event, newValue) => {
    this.setState({
      price: newValue,
    });
  };

  onSorting = (e) => {
    let option = e.target.value;
    let sortedList = [...this.state.products];
    sortedList.sort((a, b) => {
      return option === "desc"
        ? a.name >= b.name
          ? -1
          : 1
        : a.name <= b.name
        ? -1
        : 1;
    });

    this.setState({ products: sortedList });
  };

  render() {
    return (
      <StateContext.Provider
        value={{
          notAvailable: this.state.notAvailable,
          filterPrice: this.state.price,
          tempCards: this.state.tempCards,
          products: this.props.data ? this.props.data : this.state.products,
          clicked: this.cartHandler,

          selectedProducts: this.state.selectedProducts,
          closeHandler: this.closeHandler,
          incrementHandler: this.incrementHandler,
          decrementHandler: this.decrementHandler,
          handleInputChange: this.handleInputChange,
          // filetrrice: this.state.price,
          handleFilterChange: this.handleFilterChange,
          // products: this.state.products,
          onSorting: this.onSorting,
        }}
      >
        <DispatchContext.Provider>
          <MainShopWrapper>
            <LeftWrapper>
              {!this.state.loading ? (
                <div>
                  <Count>
                    Showing 1–
                    {this.props.data
                      ? this.props.data.length
                      : this.state.products.length}{" "}
                    of 23 results
                  </Count>

                  <AllCardsComponent
                  // products={
                  //   this.props.data ? this.props.data : this.state.products
                  // }
                  // tempCards={this.state.tempCards}
                  // clicked={this.cartHandler}
                  // filterPrice={this.state.price}
                  // notAvailable={this.state.notAvailable}
                  />
                </div>
              ) : (
                <Loader />
              )}
            </LeftWrapper>
            <RightWrapper>
              {!this.props.data ? (
                <SideBar
                //   selectedProducts={this.state.selectedProducts}
                //   closeHandler={this.closeHandler}
                //   incrementHandler={this.incrementHandler}
                //   decrementHandler={this.decrementHandler}
                //   handleInputChange={this.handleInputChange}
                //   price={this.state.price}
                //   handleFilterChange={this.handleFilterChange}
                //   products={this.state.products}
                //   onSorting={this.onSorting}
                //
                />
              ) : (
                <ImageSideBar data={this.props.data} />
              )}
            </RightWrapper>
          </MainShopWrapper>
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }
}

export default ProductsWrapper;
