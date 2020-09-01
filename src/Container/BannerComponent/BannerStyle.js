import styled from "styled-components";

export const ImageWrapper = styled.div`
  height: 500px;
  overflow: hidden;
  position: relative;
  @media (max-width: 375px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 0px;
  top: 40%;
  height: 50px;
  padding: 10px 0px;
  width: 30px;
  border: 1px solid black;
  background: "black";
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 0px;
  top: 40%;
  height: 50px;
  padding: 10px 0px;
  width: 30px;
  border: 1px solid black;
  background: "white";
`;
