import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 1200px;
  margin: 20px auto 12px; */
`;

export const ImageWrapper = styled.div`
  width: 100% !important;
  height: 700px;
  position: relative;
  /* position: absolute;
  top: 0;
  z-index: -1; */
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  height: 700px;
  width: 100%;
  background-color: rgb(48, 49, 51);
  opacity: 0.7;
`;

export const BannerContent = styled.div`
  color: #fff;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -100px;
`;

export const BannerShop = styled.div`
  text-align: center;
`;

export const BannerMustShop = styled.div`
  padding: 10px;
`;

export const Count = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;

export const MainShopWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
`;

export const LeftWrapper = styled.div`
  width: 70%;
`;

export const RightWrapper = styled.div`
  width: 30%;
`;
