import styled from "styled-components";

export const ColorSwitcher = styled.h3`
  color: white;
  background: #282828;
  padding: 10px 10px;
  margin: 0px;
`;

export const Wrapper = styled.div`
  width: 200px;
`;

export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 6px 18px;
  background-color: rgb(48, 49, 51);
  opacity: 0.7;
`;

export const Button = styled.div`
  background: ${(props) => props.background};
  width: 15px;
  height: 15px;
  border: none;
  outline: white;
  margin: 5px;
  border-radius: 3px;
`;
