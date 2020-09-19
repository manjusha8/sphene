import styled from "styled-components";
import userProfile from "../../assests/user-profile.jpg";

export const ProfileWrapper = styled.div`
  text-align: center;
  /* background-image: url(${userProfile}); */
  background: white;
  opacity: 0.9;
  padding: 30px;
`;

export const Welcome = styled.h3`
  color: black;
  font-size: 42px;
  font-size: 46px;
  font-weight: 600;
  line-height: 42px;
`;

export const Details = styled.div`
  width: 50%;
  text-align: left;
  @media (max-width: 320px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const UserDetails = styled.div``;

export const Title = styled.h3`
  margin: 25px 0px;
  color: black;
`;

export const Value = styled.div`
  margin: 20px 0px;
  color: grey;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  position: relative;
`;

export const Toggle = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0pc;
  margin: 13px;
  border: none;
  background: none;
  color: #d72121;
  font-size: 16px;
  outline: none;
`;

export const Input = styled.input`
  border: none;
  color: grey;
  background: none;
  outline: none;
`;

export const FeedbackTitle = styled.div`
  margin: 25px 0px;
  color: black;
  display: inline-block;
  font-weight: 700;
`;

export const FeedbackValue = styled.div`
  margin: 20px 0px;
  color: grey;
  display: inline-block;
  margin-left: 20px;
`;

export const Empty = styled.div`
  color: #d72121;
  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
  @media (max-width: 425px) {
    margin-bottom: 30px;
  }
  @media (max-width: 320px) {
    margin-bottom: 30px;
  }
`;

export const Feedback = styled.div`
  margin: 20px 0px;
`;

export const Purchased = styled(Feedback)``;

export const PurchasedTitle = styled(FeedbackTitle)``;

export const PurchasedValue = styled(FeedbackValue)``;

export const PurchasedProducts = styled.div``;

export const Label = styled.h3`
  margin: 10px 0px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  border: 1px solid #f8f8f8;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 35%;
  padding: 20px;
  background: white;
  color: black;
  text-align: center;
  font-weight: 700;
`;

export const ProductName = styled.div`
  margin: 10px 0px;
`;

export const ProductPrice = styled.div`
  margin: 10px 0px;
  text-decoration: ${(props) => (props.offerprice ? "line-through" : "none")};
`;

export const OfferPrice = styled(ProductPrice)`
  margin-left: 10px;
  text-decoration: none;
  background-color: #fcf8e3;
  display: ${(props) =>
    props.offerprice ? "inline-block" : "none"} !important;
`;

export const Quantity = styled.div``;
