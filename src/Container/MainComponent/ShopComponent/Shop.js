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
import Hoc from "../../HOCComponents/Hoc";

function Shop(props) {
  const [data, setData] = useState();

  useEffect(() => {
    let response = props.location.state;
    if (response === null || response === undefined || response === "") {
      // console.log("null");
    } else {
      setData(response.data);
      console.log("data in useeffect: ", response.data);
    }
  }, [data]);

  return (
    <Hoc>
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
    </Hoc>
  );
}

export default Shop;
