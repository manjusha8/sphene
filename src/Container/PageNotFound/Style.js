import styled from "styled-components";

export const Error = styled.h2`
  text-align: center;
  font-size: 240px;
  line-height: 100px;
  font-weight: 500;
  letter-spacing: -5px;
  color: #333;
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  color: #999;
`;

export const IconWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  background: #fff;
  line-height: 19px;
  text-align: center;
  outline: none;
  padding: 20px 26px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  letter-spacing: 1px;
  margin-top: 30px;
  border-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
`;
