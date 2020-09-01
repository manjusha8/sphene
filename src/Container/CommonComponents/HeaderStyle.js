import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 11px;
  max-width: 1200px;
  @media (max-width: 375px) {
    margin: 20px 0 11px;
  }
  @media (max-width: 425px) {
    margin: 20px 0 11px;
  }
  @media (max-width: 320px) {
    margin: 20px 0 11px;
  }
`;

export const Sphene = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.color};
  @media (max-width: 375px) {
    margin-top: 6px;
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  margin: 0;
  /* display: none; */
  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export const ListItems = styled.li`
  display: inline-block;
  padding: 0px 15px;
  @media (max-width: 375px) {
    padding: 0px 5px;
  }
  @media (max-width: 425px) {
    padding: 0px 5px;
  }
  @media (max-width: 320px) {
    padding: 0px 2px;
  }
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.active ? "2px solid " : "none")};
  border-bottom-color: ${(props) =>
    props.active ? props.theme.color : "none"};
  @media (max-width: 375px) {
    font-size: 12px;
    font-weight: 600px;
  }

  &:hover {
    padding-bottom: 10px;
    border-bottom: 2px solid;
    border-bottom-color: ${({ theme }) => theme.color};
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
  padding: 0px 10px;
  position: relative;
  @media (max-width: 375px) {
    padding: 0 3px;
  }
  @media (max-width: 425px) {
    padding: 0 5px;
  }
  @media (max-width: 320px) {
    padding: 0;
  }
`;

export const Counter = styled.div`
  width: 20px;
  height: 20px;
  line-height: 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  position: absolute;
  right: 0px;
  top: -10px;
  color: ${({ theme }) => theme.primaryColor};
  text-align: center;
  margin-bottom: 2px;
`;

export const Cart = styled.a`
  text-decoration: none;
`;

export const Search = styled.button`
  border: none;
  background: none;
  outline: none;
`;

export const LogoutWrapper = styled.div`
  position: absolute;
  right: 0px;
  z-index: 1;
  padding: 18px 6px;
  width: 200px;
  color: ${({ theme }) => theme.primaryColor};
  background-color: rgb(48, 49, 51);
  border-radius: 5px;
  text-align: center;
  /* display: none; */
  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export const Logout = styled.button`
  border: 1px solid;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.color};
  padding: 5px;
  color: ${({ theme }) => theme.color};
  background: none;
  margin-top: 10px;
  @media (max-width: 320px) {
    text-align: center;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
  @media (max-width: 375px) {
    text-align: center;
  }
`;

export const MobileWrapper = styled.div`
  /* height: 100%; */
  /* width: 30%; */
  background: white;
  display: none;
  z-index: 1;
  position: absolute;
  right: 0px;
  padding: 10px 20px;
  @media (max-width: 375px) {
    display: block;
  }
  @media (max-width: 425px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 7px 11px;
  color: ${(props) => (props.active ? props.theme.color : "black")};
`;

export const MobileTag = styled.div`
  padding: 7px 11px;
  border-bottom: 1px solid #a0a0a0;
`;
