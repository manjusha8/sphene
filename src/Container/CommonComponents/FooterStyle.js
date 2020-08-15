import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #202020;
  color: #999;
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 65px 40px 0;
  height: 220px;
`;

export const AboutWrapper = styled.div`
  width: 35%;
`;

export const HelpWrapper = styled.div`
  width: 35%;
  margin-left: 30px;
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
`;

export const LeftWrapper = styled.div`
  /* display: inline-block; */
`;

export const RightWrapper = styled.div`
  padding-left: 20px;
`;

export const ContactWrapper = styled.div`
  width: 25%;
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
`;

export const Sphene = styled.a`
  color: #fff;
  text-decoration: none;
`;
