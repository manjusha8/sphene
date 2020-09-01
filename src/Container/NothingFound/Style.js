import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  cursor: pointer;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  padding: 10px 13px;
  color: ${({ theme }) => theme.primaryColor};
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
`;
