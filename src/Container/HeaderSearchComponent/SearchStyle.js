import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchWrapper = styled.div`
  position: relative;
  margin: 20px auto;
  max-width: 1200px;
`;

export const TodosWrapper = styled.div`
  /* position: absolute; */
  z-index: 1;
  background: white;
  width: 100%;
  /* max-width: 1200px; */
`;

export const Todos = styled.h3`
  border-top: 1px solid #f8f8f8;
  padding: 10px;
  text-align: center;
  color: gray;
`;

export const TodosCloseIcon = styled.div`
  right: 0;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 20px;
  color: gray;
  box-sizing: border-box;
  letter-spacing: 0;
  font-weight: 500;
  text-align: center;
`;

export const Close = styled.div`
  border: none;
  outline: none;
  background: none;
`;
