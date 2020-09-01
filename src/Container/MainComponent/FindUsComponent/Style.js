import styled from "styled-components";

export const Paragraph = styled.div`
  line-height: 29px;
  color: #666;
  font-size: 16px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.p``;

export const Text = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`;

export const Wrapper = styled.div``;
