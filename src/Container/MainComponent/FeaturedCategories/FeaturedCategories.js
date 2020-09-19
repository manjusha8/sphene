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
import { Wrong } from "../ShopComponent/ShopStyle";
import { withRouter } from "react-router-dom";
import BannerWrapper from "../../BannerComponent/BannerWrapper";
import Hoc from "../../HOCComponents/Hoc";
import { useEffect } from "react";
import { connect } from "react-redux";
import { GET_DATA } from "../../../Redux/Store";
import Loader from "../../Loader/Loader";

function FeaturedCategories(props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    props.getHomeData();
  }, []);

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

  return !props.loading ? (
    <Hoc>
      <BannerWrapper />
      <Headline>Featured Categories</Headline>
      {!props.error ? (
        <Wrapper>
          {props.homeProducts &&
            props.homeProducts.map((backpack) => {
              if (backpack.name === "Backpack")
                return (
                  <LeftWrapper key={backpack.name}>
                    <ProductWrapper onMouseOver={() => setIsShown(true)}>
                      <Image
                        src={require(`../../assests/${backpack.url}`)}
                        alt="products"
                      />
                      <ContentHover
                        active={isShown === true}
                        onClick={() =>
                          navigateHandler(backpack.relatedProducts)
                        }
                      >
                        {backpack.name}
                      </ContentHover>
                    </ProductWrapper>
                  </LeftWrapper>
                );
            })}

          <RightWrapper>
            {props.homeProducts &&
              props.homeProducts.map((products, index) => {
                if (products.name !== "Backpack")
                  return (
                    <CardWrapper
                      key={products.name}
                      onMouseOver={() => clickHandler(index)}
                    >
                      <Image
                        src={require(`../../assests/${products.url}`)}
                        alt="products"
                      />
                      <ContentHover
                        onClick={() =>
                          navigateHandler(products.relatedProducts)
                        }
                        active={isShown === index}
                      >
                        {products.name}
                      </ContentHover>
                    </CardWrapper>
                  );
              })}
          </RightWrapper>
        </Wrapper>
      ) : (
        <Wrong>
          <p>Something went wrong...</p>
          <p>Please check your connection</p>
        </Wrong>
      )}
    </Hoc>
  ) : (
    <Loader />
  );
}

const mapStateToProps = (state) => {
  console.log("state home products: ", state.homeProducts);

  return {
    loading: state.loading,
    homeProducts: state.homeProducts,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    getHomeData: () => dispatch({ type: GET_DATA }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FeaturedCategories));
