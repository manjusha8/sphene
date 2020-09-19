import React from "react";
import { Wrapper, LeftWrapper, RightWrapper, VideoWrapper } from "./Style";
import ContactForm from "./ContactForm";
import FindUs from "../FindUsComponent/FindUs";
// import Video from "../../VideoComponent/VideoComponent";
import Hoc from "../../HOCComponents/Hoc";
function Contact() {
  return (
    <Hoc>
      <Wrapper>
        <LeftWrapper>
          <h3>Find Us There</h3>
          <FindUs />
        </LeftWrapper>
        <RightWrapper>
          <h3>Contact Form</h3>
          <ContactForm />
        </RightWrapper>
      </Wrapper>
      {/* <VideoWrapper>
        <Video />
      </VideoWrapper> */}
    </Hoc>
  );
}

export default Contact;
