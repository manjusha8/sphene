import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  @media (max-width: 375px) {
    display: block;
  }
  @media (max-width: 425px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  width: 250px;
  margin: 0 20px 20px 0;
  height: 100%;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 100% !important;
    margin-bottom: 20px !important;
  }
  @media (max-width: 425px) {
    width: 80% !important;
    margin: 0px auto 20px !important;
  }
  @media (max-width: 320px) {
    width: 100% !important;
    margin: 0px auto 20px !important;
  }
  @media (max-width: 768px) {
    width: 250px;
    margin: 0 10px 10px 0;
  }
`;

export const ImageWrapper = styled.div`
  height: 225px;
  position: relative;
  @media (max-width: 320px) {
    width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const CartIcon = styled.div`
  width: 30px;
  display: ${(props) => (props.active ? "block" : "none")};
  height: 30px;
  background: black;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 320px) {
    bottom: 4px;
  }
`;

export const IconWrapper = styled.div`
  padding: 5px;
`;

export const ContentWrapper = styled.div`
  color: #606060;
  background: #fff;
  padding: 20px;
  font-size: 16px;
  color: #666;
  line-height: 26px;
  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const ProductName = styled.div`
  line-height: 26px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Price = styled(ProductName)``;

export const ProductPrice = styled.div`
  display: inline-block;
  text-decoration: ${(props) => (props.offerPrice ? "line-through" : "none")};
`;

export const OfferPrice = styled.div`
  display: ${(props) => (props.offerprice ? "inline-block" : "none")};
  margin-left: 15px;
  background-color: #fcf8e3;
`;
