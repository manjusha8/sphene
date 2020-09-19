import React, { Component } from "react";
import {
  MainShopWrapper,
  Count,
  LeftWrapper,
  RightWrapper,
  Wrong,
} from "./ShopStyle";
import AllCardsComponent from "../CardsComponent/AllCardsComponent";
import SideBar from "../SideBarComponent/SideBar";
import ImageSideBar from "../ImageSideBar/ImageSideBar";
import Loader from "../../Loader/Loader";
import StateContext from "../../Context/StateContext";
import { connect } from "react-redux";
import { LOADING_FALSE, GET_DATA } from "../../../Redux/Store";
import { Redirect } from "react-router-dom";
// import DispatchContext from "../../Context/DispatchContext";

class ProductsWrapper extends Component {
  state = {
    products: [],
    selectedProducts: [],
    tempCards: [],
    price: 10,
    notAvailable: false,
    loading: false,
    media: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      // store.dispatch({ type: LOADING_FALSE });
      this.props.getData();
      console.log("response data: ", this.props.getData());
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
      let temp = [...this.props.products];
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

  handleFilterChange = (event, newValue) => {
    this.setState({
      price: newValue,
    });
  };

  render() {
    return (
      <StateContext.Provider
        value={{
          notAvailable: this.state.notAvailable,
          filterPrice: this.state.price,
          tempCards: this.state.tempCards,
          products: this.props.data ? this.props.data : this.props.products,

          handleInputChange: this.handleInputChange,
          handleFilterChange: this.handleFilterChange,
          onSorting: this.onSorting,
        }}
      >
        <MainShopWrapper>
          <LeftWrapper>
            {!this.props.loading ? (
              !this.props.error ? (
                <div>
                  <Count>
                    Showing 1–
                    {this.props.data
                      ? this.props.data.length
                      : this.state.products.length}{" "}
                    of 23 results
                  </Count>

                  <AllCardsComponent />
                </div>
              ) : (
                <Wrong>
                  <p>Something went wrong...</p>
                  <p>Please check your connection</p>
                </Wrong>
              )
            ) : (
              <Loader />
            )}
          </LeftWrapper>
          <RightWrapper>
            {!this.props.data ? (
              <SideBar />
            ) : (
              <ImageSideBar data={this.props.data} />
            )}
          </RightWrapper>
        </MainShopWrapper>
      </StateContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    products: state.products,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    getData: () => dispatch({ type: GET_DATA }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsWrapper);
