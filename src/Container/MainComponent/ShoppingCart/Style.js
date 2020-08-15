import styled from "styled-components";

export const CartWrapper = styled.div`
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  padding: 20px;
  /* width: 100%; */
`;

export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  /* padding-bottom: 20px; */
  /* border-bottom: 1px solid #f8f8f8; */
`;

export const ImageWrapper = styled.div`
  width: 30%;
  /* width: 50px; */
  /* display: inline-block; */
  border: 1px solid #f8f8f8;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  padding: 20px;
  background: #f8f8f8;
  position: relative;
`;

export const CloseWrapper = styled.div`
  width: 20px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const QuantityWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const IncrementWrapper = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  /* border: 2px solid red; */
  margin-right: 10px;
`;

export const DecrementWrapper = styled(IncrementWrapper)`
  margin-left: 10px;
`;

export const ProductName = styled.div``;

export const ProductPrice = styled.div`
  display: inline-block;
  text-decoration: ${(props) => (props.offerprice ? "line-through" : "none")};
`;

export const OfferPrice = styled(ProductPrice)`
  margin-left: 10px;
  visibility: ${(props) => (props.offerprice ? "visible" : "hidden")};
  background-color: ${(props) => (props.offerprice ? "#fcf8e3" : "none")};
  text-decoration: none;
`;

export const Quantity = styled.div``;

export const TotalWrapper = styled.div``;

export const Count = styled.div``;

export const Price = styled.div``;

export const CheckOutWrapper = styled.div`
  padding: 30px;
  border-top: 1px solid #f8f8f8;
  cursor: pointer;
`;

export const CheckOut = styled.button`
  width: 100%;
  color: white;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 15px 5px;
  background-color: #44b272;
  &:hover {
    background: black;
    cursor: pointer;
  }
`;
