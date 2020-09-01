import React, { useEffect } from "react";
import { Empty, TitleBar } from "../MainComponent/CartHandler/Style";
import { Error, Content, IconWrapper, ButtonWrapper, Button } from "./Style";
import Help from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import Hoc from "../HOCComponents/Hoc";

function PageNotFound() {
  return (
    <Hoc>
      <Empty>
        <TitleBar>No Page Found</TitleBar>
      </Empty>
      <Error>
        404{" "}
        <IconWrapper>
          <Help style={{ height: "100px", width: "100px" }} />
        </IconWrapper>
      </Error>
      <Content>
        We're sorry, but the page you were looking for doesn't exist.
      </Content>
      <ButtonWrapper>
        <Link to="/home">
          <Button>Back To HomePage</Button>
        </Link>
      </ButtonWrapper>
    </Hoc>
  );
}

export default PageNotFound;
