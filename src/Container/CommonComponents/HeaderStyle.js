import Styled from "styled-components";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 11px;
  max-width: 1200px;
`;

export const Sphene = styled.div`
  font-weight: 900;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  margin: 0;
`;

export const ListItems = styled.li`
  display: inline-block;
  padding: 0px 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.active ? "2px solid #d72121" : "none")};

  &:hover {
    padding-bottom: 10px;
    border-bottom: 2px solid #d72121;
  }
  &:active {
    padding-bottom: 10px;
    border-bottom: 2px solid #d72121;
  }
`;

export const IconsContainer = styled.div`
  display: inline-block;
`;

export const Icons = styled.span`
  padding: 0px 15px;
`;

export const Search = styled.button`
  border: none;
  background: none;
  outline: none;
`;
