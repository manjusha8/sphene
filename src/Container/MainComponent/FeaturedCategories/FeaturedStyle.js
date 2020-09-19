import styled from "styled-components";

export const Headline = styled.h3`
  margin: 58px 0 48px 0;
  font-size: 28px;
  text-align: center;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.5px;
  font-weight: 500;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 30px auto;
  height: 500px;
  @media (max-width: 375px) {
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 13px;
    margin: 0 auto;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
  }
`;

export const ContentHover = styled.div`
  padding: 12px 30px;
  background: ${(props) => (props.active ? "black" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "black")};
  position: absolute;
  bottom: 20%;
  left: 50%;
  margin-left: -50px;
  box-shadow: 1px 1px 3px rgba(136, 136, 136, 0.19);
  border-radius: 50px;
  @media (max-width: 375px) {
    padding: 10px 20px;
    left: 50%;
  }
`;

export const CardWrapper = styled.div`
  width: 45%;
  height: 49%;
  margin: 0 20px 12px 0;
  position: relative;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin: 0;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  width: 35%;
  margin-right: 30px;
  @media (max-width: 320px) {
    width: 100% !important;
  }
  @media (max-width: 375px) {
    width: 100% !important;
  }
  @media (max-width: 425px) {
    width: 100% !important;
  }
  @media (max-width: 768px) {
    width: 35%;
  }
`;

export const RightWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    width: 100% !important;
    display: block !important;
    flex-wrap: nowrap;
  }
  @media (max-width: 425px) {
    width: 100% !important;
    display: block !important;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    width: 65%;
    flex-wrap: nowrap;
  }
`;
