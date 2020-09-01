import styled from "styled-components";

export const PaginationWrapper = styled.div`
  @media (max-width: 375px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const List = styled.li`
  display: inline-block;
  margin-right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.primaryColor};
  background: ${(props) => (props.active ? props.theme.background : "white")};
`;
