import React, { Component } from "react";
import {
  Headline,
  Wrapper,
  ProductWrapper,
  CardWrapper,
  ContentHover,
  Image,
  LeftWrapper,
  RightWrapper,
} from "./FeaturedStyle";
import { withRouter } from "react-router-dom";
import BannerWrapper from "../../BannerComponent/BannerWrapper";
import { render } from "@testing-library/react";

class FeaturedCategories extends Component {
  state = {
    backpack: [
      {
        image: require("../../assests/backpack.jpg"),
        id: 0,
        name: "Backpack",
      },
    ],
    products: [
      {
        image: require("../../assests/shoes.jpg"),
        id: 0,
        name: "Shoes",
        url: "/shop",
        quantity: 1,
        price: 15,
        offerprice: 10,
        relatedProducts: [
          require("../../assests/shoes-01.jpg"),
          require("../../assests/shoes-02.jpg"),
          require("../../assests/shoes-03.jpg"),
          require("../../assests/shoes-04.jpg"),
          require("../../assests/shoes-05.jpg"),
          require("../../assests/shoes-06.jpg"),
          require("../../assests/shoes-07.jpg"),
          require("../../assests/shoes-08.jpg"),
        ],
      },
      {
        image: require("../../assests/handbags.jpg"),
        id: 1,
        name: "Handbags",
        url: "/shop",
        quantity: 1,
        price: 15,
        offerprice: 10,

        relatedProducts: [
          require("../../assests/shoes-01.jpg"),
          require("../../assests/shoes-02.jpg"),
          require("../../assests/shoes-03.jpg"),
          require("../../assests/shoes-04.jpg"),
          require("../../assests/shoes-05.jpg"),
          require("../../assests/shoes-06.jpg"),
          require("../../assests/shoes-07.jpg"),
          require("../../assests/shoes-08.jpg"),
        ],
      },
      {
        image: require("../../assests/cap.jpg"),
        id: 2,
        name: "Cap",
        url: "/shop",
        quantity: 1,
        price: 15,
        offerprice: 10,

        relatedProducts: [
          require("../../assests/shoes-01.jpg"),
          require("../../assests/shoes-02.jpg"),
          require("../../assests/shoes-03.jpg"),
          require("../../assests/shoes-04.jpg"),
          require("../../assests/shoes-05.jpg"),
          require("../../assests/shoes-06.jpg"),
          require("../../assests/shoes-07.jpg"),
          require("../../assests/shoes-08.jpg"),
        ],
      },
      {
        image: require("../../assests/watch.jpg"),
        id: 3,
        name: "Watch",
        url: "/shop",
        quantity: 1,
        price: 15,
        offerprice: 10,

        relatedProducts: [
          require("../../assests/shoes-01.jpg"),
          require("../../assests/shoes-02.jpg"),
          require("../../assests/shoes-03.jpg"),
          require("../../assests/shoes-04.jpg"),
          require("../../assests/shoes-05.jpg"),
          require("../../assests/shoes-06.jpg"),
          require("../../assests/shoes-07.jpg"),
          require("../../assests/shoes-08.jpg"),
        ],
      },
    ],
    isShown: false,
  };

  clickHandler = (id) => {
    this.setState({ isShown: id });
  };

  navigateHandler = (id) => {
    console.log("id: ", id);
    this.state.products.map((value, index) => {
      if (id === index) {
        console.log("relatedimages", value.relatedProducts);
        this.props.history.push({
          pathname: "/shop",
          state: {
            data: value.relatedProducts,
          },
        });
        console.log("realted images: ", value.relatedProducts);
      }
    });
  };
  render() {
    return (
      <div>
        <BannerWrapper />
        <Headline>Featured Categories</Headline>
        <Wrapper>
          <LeftWrapper>
            <ProductWrapper onMouseOver={() => this.state.isShown}>
              <Image src={this.state.backpack.image} alt="products" />
              <ContentHover active={this.state.isShown === true}>
                {this.state.backpack.name}
              </ContentHover>
            </ProductWrapper>
          </LeftWrapper>
          <RightWrapper>
            {this.state.products.map((products, index) => {
              return (
                <CardWrapper onMouseOver={() => this.clickHandler(index)}>
                  <Image src={products.image} alt="products" />
                  <ContentHover
                    onClick={this.navigateHandler(index)}
                    active={this.state.isShown === index}
                  >
                    {products.name}
                  </ContentHover>
                </CardWrapper>
              );
            })}
          </RightWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default withRouter(FeaturedCategories);
