import React, { useEffect } from "react";
import Hoc from "../../HOCComponents/Hoc";
import Profile from "./Profile";
import Woman from "../../assests/Woman.jpg";
import {
  Wrapper,
  LeftWrapper,
  SideImageWrapper,
  Image,
  RightWrapper,
} from "./Style";
import { Empty, TitleBar } from "../CartHandler/Style";

function UserProfile() {
  return (
    <Hoc>
      {/* <Empty>
        <TitleBar>Welcome </TitleBar>
      </Empty>
      <Wrapper>
        <LeftWrapper>
          <SideImageWrapper>
            <Image src={Woman} alt=" products" />
          </SideImageWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Profile />
        </RightWrapper>
      </Wrapper> */}
      <Profile />
    </Hoc>
  );
}

export default UserProfile;
