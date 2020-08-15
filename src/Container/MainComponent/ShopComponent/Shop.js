import React, { useState } from "react";
import ShopImage from "../../assests/shopImage.jpg";
import {
  Wrapper,
  ImageWrapper,
  Image,
  ImageBackground,
  BannerContent,
  BannerShop,
  BannerMustShop,
} from "./ShopStyle";
import ProductsWrapper from "./ProductsWrapper";
import { useEffect } from "react";

function Shop(props) {
  const [data, setData] = useState();

  // useEffect(() => {
  //   let response = props.location.state;
  //   if (response === null || response === {} || response === undefined) {
  //     console.log("null");
  //   } else {
  //     setData(response.data);
  //     console.log("data: ", data);
  //   }
  // }, []);

  return (
    <Wrapper>
      <div>
        <ImageWrapper>
          <Image src={ShopImage} alt="shop-banner" />
          <ImageBackground>
            <BannerContent>
              <BannerShop>SHOP</BannerShop>
              <BannerMustShop>Our Must Have Products</BannerMustShop>
            </BannerContent>
          </ImageBackground>
        </ImageWrapper>
        <ProductsWrapper data={data} />
      </div>
    </Wrapper>
  );
}

export default Shop;
