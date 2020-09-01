import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100% !important;
  height: 700px;
  position: relative;
  @media (max-width: 375px) {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 425px) {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  height: 700px;
  width: 100%;
  background-color: rgb(48, 49, 51);
  opacity: 0.7;
  @media (max-width: 375px) {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 425px) {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const BannerContent = styled.div`
  color: #fff;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -100px;
  @media (max-width: 320px) {
    left: 40%;
  }
`;

export const BannerShop = styled.h2`
  text-align: center;
`;

export const BannerMustShop = styled.h3`
  padding: 10px;
  line-height: 26px;
  letter-spacing: 1px;
`;

export const Count = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  @media (max-width: 375px) {
    text-align: center;
    margin: 25px auto;
  }
  @media (max-width: 425px) {
    text-align: center;
    margin: 25px auto;
  }
  @media (max-width: 320px) {
    text-align: center;
    margin: 25px auto;
  }
`;

export const MainShopWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  @media (max-width: 375px) {
    margin: 0;
    display: block;
  }
  @media (max-width: 425px) {
    margin: 0;
    display: block;
  }
  @media (max-width: 320px) {
    margin: 0;
    display: block;
  }
`;

export const LeftWrapper = styled.div`
  width: 70%;
  @media (max-width: 375px) {
    width: 90%;
    margin: 10px auto;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin: 10px auto;
  }
  @media (max-width: 320px) {
    width: 100%;
    margin: 0;
  }
`;

export const RightWrapper = styled.div`
  width: 30%;
  @media (max-width: 375px) {
    width: 90% !important;
    margin: 10px auto;
  }
  @media (max-width: 425px) {
    width: 90% !important;
    margin: 10px auto;
  }
  @media (max-width: 320px) {
    width: 100% !important;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 29%;
  }
`;
