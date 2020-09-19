import React, { useState } from "react";
import {
  Wrapper,
  FooterWrapper,
  AboutWrapper,
  Title,
  Text,
  HelpWrapper,
  ListContainer,
  ListItems,
  Link,
  Container,
  LeftWrapper,
  RightWrapper,
  ContactWrapper,
  ContactText,
  Copyrights,
  Sphene,
} from "./FooterStyle";

function Footer() {
  const [helpfulLinks] = useState([
    "About Us",
    "Press Realese",
    "Careers",
    "Services",
    "Projects",
  ]);

  const [helpful] = useState([
    "In The News",
    "Our Blogs",
    "Testimonials",
    "Contact",
  ]);

  return (
    <Wrapper>
      <FooterWrapper>
        <AboutWrapper>
          <Title>ABOUT</Title>
          <Text>
            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
            libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
            laoreet ullamcorper phasellus semper.
          </Text>
        </AboutWrapper>
        <HelpWrapper>
          <Title>HELPFUL LINKS</Title>
          <Container>
            <LeftWrapper>
              <ListContainer>
                {helpfulLinks.map((value, index) => (
                  <ListItems key={index}>
                    <Link href="#">{value}</Link>
                  </ListItems>
                ))}
              </ListContainer>
            </LeftWrapper>
            <RightWrapper>
              <ListContainer>
                {helpful.map((value, index) => (
                  <ListItems key={index}>
                    <Link href="#">{value}</Link>
                  </ListItems>
                ))}
              </ListContainer>
            </RightWrapper>
          </Container>
        </HelpWrapper>
        <ContactWrapper>
          <Title>CONTACT US</Title>
          <ContactText>
            <div>12345 Little Lonsdale St, Melbourne</div>
            <div> Phone: (123) 123-456</div>
            <div> Fax: (123) 123-456 </div>
            <div> E-Mail: office@example.com</div>
          </ContactText>
        </ContactWrapper>
      </FooterWrapper>
      <Copyrights>
        © Copyright 2016 by <Sphene href="#"> Sphene </Sphene>. All Rights
        Reserved.
      </Copyrights>
    </Wrapper>
  );
}

export default Footer;
