import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #202020;
  color: #999;
  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none !important;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 65px 40px 0;
  /* height: 220px; */

  @media (max-width: 320px) {
    display: block !important;
    padding: 20px;
  }
  @media (max-width: 375px) {
    display: block !important;
    padding: 20px;
  }
  @media (max-width: 425px) {
    display: block !important;
    padding: 20px;
  }
`;

export const AboutWrapper = styled.div`
  width: 35%;
  @media (max-width: 320px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const HelpWrapper = styled.div`
  width: 35%;
  margin-left: 30px;

  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItems = styled.li`
  &:before {
    content: ">";
    color: #fff;
    padding-right: 10px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #999;
`;

export const Container = styled.div`
  display: flex;
  @media (max-width: 375px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
  @media (max-width: 425px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LeftWrapper = styled.div`
  width: 45%;
`;

export const RightWrapper = styled.div`
  padding-left: 12px;
`;

export const ContactWrapper = styled.div`
  width: 25%;

  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 900;
`;

export const Text = styled.div`
  color: #999;
  font-size: 16px;
  height: 300px;
`;

export const ContactText = styled(Text)`
  line-height: 27px;
`;

export const Copyrights = styled.div`
  color: #777;
  border-top: 1px solid #333;
  text-align: center;
  padding: 40px 0;
  width: 100%;
  @media (max-width: 375px) {
    width: 100%;
    bottom: 0;
    margin-top: 20px;
  }
`;

export const Sphene = styled.a`
  color: #fff;
  text-decoration: none;
`;
