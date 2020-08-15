import styled from "styled-components";

export const Headline = styled.h3`
  margin: 58px 0 48px 0;
  font-size: 28px;
  text-align: center;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 30px auto;
  height: 500px;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
`;

export const CardWrapper = styled.div`
  width: 45%;
  height: 49%;
  margin: 0 20px 12px 0;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* transition: 0.5s all ease-in-out; */
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LeftWrapper = styled.div`
  width: 35%;
  margin-right: 30px;
`;

export const RightWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
`;
