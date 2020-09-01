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
import Hoc from "../../HOCComponents/Hoc";
import { useEffect } from "react";
import instance from "../../Axios/axios";

function FeaturedCategories(props) {
  const [backpack] = useState({
    url: "backpack.jpg",
    id: 0,
    name: "Backpack",
    description: [
      "Outer Material: Nylon, Color: Orange",
      "Water resistance dimensions: 56.8cms x 33.6 cms x 5.4 cms (LxWxH)",
      "Top loading pack with draw string opening for easy and quick access",
      "Strengthened haul loop to take on heavier loads",
      "Volume Capacity - 45 Liters",
    ],
    relatedProducts: [
      {
        url: "backpack-01.jpg",
        id: 0,
        name: "backpack",
        quantity: 1,
        price: 10,
        offerprice: 10,
      },
      {
        url: "backpack-02.jpg",
        id: 1,
        name: "backpack",
        quantity: 1,
        price: 10,
        offerprice: 10,
      },
      {
        url: "backpack-03.jpg",
        id: 2,
        name: "backpack",
        quantity: 1,
        price: 10,
        offerprice: 10,
      },
      {
        url: "backpack-04.jpg",
        id: 3,
        name: "backpack",
        quantity: 1,
        price: 10,
        offerprice: 10,
      },
      {
        url: "backpack-05.jpg",
        id: 4,
        name: "backpack",
        quantity: 1,
        price: 10,
        offerprice: 10,
      },
    ],
  });
  const [products] = useState([
    {
      url: "shoes.jpg",
      id: 0,
      name: "Shoes",
      quantity: 1,
      price: 15,
      offerprice: 10,
      description: [
        "Shoe Width: Medium",
        "Provides Comfort for daily office use and party wear",
        "Lifestyle: Formal or casual, slip on shoes",
        "Where can use it: special meeting, office, wedding, corporate, all festival, and regular use etc",
      ],
      relatedProducts: [
        {
          url: "shoes-01.jpg",
          id: 0,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },

        {
          url: "shoes-02.jpg",
          id: 1,
          name: "Shoes",
          quantity: 1,
          price: 9,
          offerprice: 10,
        },

        {
          url: "shoes-03.jpg",
          id: 2,
          name: "Shoes",
          quantity: 1,
          price: 7,
          offerprice: 10,
        },
        {
          url: "shoes-04.jpg",
          id: 3,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "shoes-05.jpg",
          id: 4,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "shoes-06.jpg",
          id: 5,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "shoes-07.jpg",
          id: 6,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "shoes-08.jpg",
          id: 7,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
      ],
    },
    {
      url: "handbags.jpg",
      id: 1,
      name: "Handbags",
      quantity: 1,
      price: 15,
      offerprice: 10,
      description: [
        "  Faux leather material emerald colored satchel 20.5 centimeters ",
        "Do not expose to extreme heat",
        "Metal Logo",
        "Internal Compartment",
        "Back Zipper",
      ],
      relatedProducts: [
        {
          url: "handbag-01.jpg",
          id: 0,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-02.jpg",
          id: 1,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-03.jpg",
          id: 2,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-04.jpg",
          id: 3,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-05.jpg",
          id: 4,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-06.jpg",
          id: 5,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-07.jpg",
          id: 6,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-08.jpg",
          id: 7,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "handbag-01.jpg",
          id: 8,
          name: "Handbag",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
      ],
    },
    {
      url: "cap.jpg",
      id: 2,
      name: "Cap",
      quantity: 1,
      price: 15,
      offerprice: 10,
      description: [
        "Material Cotton",
        "Color Black",
        "Type Baseball Cap",
        "Air Cooling with Comfortable wearing",
        "Adjustable Strap at Back of Cap",
      ],
      relatedProducts: [
        {
          url: "cap-01.jpg",
          id: 0,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-02.jpg",
          id: 1,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-03.jpg",
          id: 2,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-04.jpg",
          id: 3,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-05.jpg",
          id: 4,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-06.jpg",
          id: 5,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-07.jpg",
          id: 6,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-08.jpg",
          id: 7,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "cap-09.jpg",
          id: 8,
          name: "Cap",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
      ],
    },
    {
      url: "watch.jpg",
      id: 3,
      name: "Watch",
      quantity: 1,
      price: 15,
      offerprice: 10,
      description: [
        "Dial Color: Blue, Case Shape: Round, Dial Glass Material: Sapphire",
        "Band Color: Silver, Band Material: Stainless Steel",
        "Watch Movement Type: Quartz, Watch Display Type: Analog",
        "Case Material: Stainless Steel, Case Diameter: 42 millimeters",
      ],
      relatedProducts: [
        {
          url: "watch-01.jpg",
          id: 0,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-02.jpg",
          id: 1,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-03.jpg",
          id: 2,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-04.jpg",
          id: 3,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-05.jpg",
          id: 4,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-06.jpg",
          id: 5,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-07.jpg",
          id: 6,
          name: "Shoes",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
        {
          url: "watch-08.jpg",
          id: 7,
          name: "Watch",
          quantity: 1,
          price: 10,
          offerprice: 10,
        },
      ],
    },
  ]);

  const [isShown, setIsShown] = useState(false);
  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   console.log("instance");
  //   instance
  //     .get("/.json")
  //     .then((response) => {
  //       console.log("Home products: ", response.data.HomeProducts);
  //       setProducts(response.data.HomeProducts);
  //     })
  //     .catch((err) => console.log("home err: ", err));
  // }, []);

  function clickHandler(id) {
    setIsShown(id);
  }

  function navigateHandler(value) {
    console.log("nav id: ", value);
    props.history.push({
      pathname: "/shop",
      state: {
        data: value,
      },
    });
  }

  return (
    <Hoc>
      <BannerWrapper />
      <Headline>Featured Categories</Headline>
      <Wrapper>
        {/* {products.map((backpack, value) => {
          if (backpack.name === "Backpack")
            return ( */}
        <LeftWrapper>
          <ProductWrapper onMouseOver={() => setIsShown(true)}>
            <Image
              src={require(`../../assests/${backpack.url}`)}
              alt="products"
            />
            <ContentHover
              active={isShown === true}
              onClick={() => navigateHandler(backpack.relatedProducts)}
            >
              {backpack.name}
            </ContentHover>
          </ProductWrapper>
        </LeftWrapper>
        {/* );
        })} */}

        <RightWrapper>
          {products.map((products, index) => {
            // if (products.name !== "Backpack")
            return (
              <CardWrapper onMouseOver={() => clickHandler(index)}>
                <Image
                  src={require(`../../assests/${products.url}`)}
                  alt="products"
                />
                <ContentHover
                  onClick={() => navigateHandler(products.relatedProducts)}
                  active={isShown === index}
                >
                  {products.name}
                </ContentHover>
              </CardWrapper>
            );
          })}
        </RightWrapper>
      </Wrapper>
    </Hoc>
  );
}

export default withRouter(FeaturedCategories);
