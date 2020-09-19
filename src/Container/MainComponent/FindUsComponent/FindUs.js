import React from "react";
import { Paragraph, Wrapper, ContentWrapper, Title, Text, Link } from "./Style";
import { useState } from "react";

function FindUs() {
  const [contact] = useState([
    {
      title: "Phone:",
      text: "(123) 123-456",
      url: "#",
    },
    {
      title: "Fax:",
      text: "(123) 123-456",
      url: "#",
    },
    {
      title: "Web:",
      text: "www.example.com",
      url: "www.example.com",
    },
    {
      title: "Email:",
      text: "office@example.com",
      url: "office@example.com",
    },
  ]);
  return (
    <>
      <Paragraph>
        Collaboratively administrate turnkey channels whereas virtual e-tailers.
        Objectively seize scalable metrics whereas proactive e-services.
      </Paragraph>
      <Wrapper>
        {contact.map((value) => (
          <ContentWrapper key={value.title}>
            <Title>{value.title}</Title>
            <Text>
              <Link href={value.url}>{value.text}</Link>
            </Text>
          </ContentWrapper>
        ))}
      </Wrapper>
    </>
  );
}

export default FindUs;
