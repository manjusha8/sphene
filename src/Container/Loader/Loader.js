import React, { Component } from "react";
import { Facebook } from "react-spinners-css";
import { LoaderWrapper, Wrapper } from "./Style";
import Spinner from "react-spinners-css/dist/Spinner";
import Circle from "react-spinners-css/dist/Circle";
import Default from "react-spinners-css/dist/Default";
import Orbitals from "react-spinners-css/dist/Orbitals";

class Loader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <Wrapper>
          <Spinner color="black" />
        </Wrapper>
      </LoaderWrapper>
    );
  }
}

export default Loader;
