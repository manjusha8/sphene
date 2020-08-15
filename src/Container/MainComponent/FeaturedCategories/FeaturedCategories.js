import React, { useState } from "react";
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

function FeaturedCategories(props) {
  const [backpack] = useState({
    image: require("../../assests/backpack.jpg"),
    id: 0,
    name: "Backpack",
  });
  const [products] = useState([
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
  ]);

  const [isShown, setIsShown] = useState(false);

  function clickHandler(id) {
    setIsShown(id);
  }

  function navigateHandler(id) {
    console.log("id: ", id);
    products.map((value, index) => {
      if (id === index) {
        console.log("relatedimages", value.relatedProducts);
        props.history.push({
          pathname: "/shop",
          state: {
            data: value.relatedProducts,
          },
        });
      }
    });
  }

  return (
    <div>
      <BannerWrapper />
      <Headline>Featured Categories</Headline>
      <Wrapper>
        <LeftWrapper>
          <ProductWrapper onMouseOver={() => setIsShown(true)}>
            <Image src={backpack.image} alt="products" />
            <ContentHover active={isShown === true}>
              {backpack.name}
            </ContentHover>
          </ProductWrapper>
        </LeftWrapper>
        <RightWrapper>
          {products.map((products, index) => {
            return (
              <CardWrapper onMouseOver={() => clickHandler(index)}>
                <Image src={products.image} alt="products" />
                <ContentHover
                  // onClick={navigateHandler(index)}
                  active={isShown === index}
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

export default withRouter(FeaturedCategories);
