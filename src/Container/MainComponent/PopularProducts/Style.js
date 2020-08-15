import styled from "styled-components";

export const PopularProductsWrapper = styled.div`
  margin-top: 20px;
  /* height: 70px; */
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f8f8f8;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  padding: 20px;
`;

export const ProductName = styled.div``;

export const ProductPrice = styled.div`
  display: inline-block;
  text-decoration: ${(props) => (props.offerprice ? "line-through" : "none")};
`;

export const OfferPrice = styled(ProductPrice)`
  margin-left: 10px;
  text-decoration: none;
  background-color: #fcf8e3;
  display: ${(props) =>
    props.offerprice ? "inline-block" : "none"} !important;
`;
