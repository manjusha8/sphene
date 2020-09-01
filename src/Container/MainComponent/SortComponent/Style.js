import styled from "styled-components";

export const Wrapper = styled.select`
  padding: 6px 18px;
  background: #282828;
  /* opacity: 0.9; */
  color: ${({ theme }) => theme.color};
  @media (max-width: 375px) {
    margin: 10px 100px;
  }
`;

export const Value = styled.option`
  padding: 5px 0px;
`;
