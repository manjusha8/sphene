import styled from "styled-components";

export const Red = styled.button`
  background: ${({ theme }) => theme.background};
  width: 5px;
  height: 15px;
  outline: white;
  border: none;
  margin: 5px;
  border-radius: 3px;
`;

export const Green = styled.button`
  background: ${({ theme }) => theme.background};
  width: 5px;
  height: 15px;
  border: none;
  outline: white;
  margin: 5px;
  border-radius: 3px;
`;

export const PaletteWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 40%;
  z-index: 1;
`;

export const SettingIconWrapper = styled.div`
  display: inline-block;
`;
