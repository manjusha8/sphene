import React, { useState } from "react";
import {
  Wrapper,
  ImageWrapper,
  Image,
  FormWrapper,
  Label,
  Input,
  ButtonWrapper,
  SignupButton,
  LoginButton,
} from "./Style";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [images] = useState(require("../../assests/backpack.jpg"));
  // const [email]

  function submitHandler() {
    props.history.push("/home");
  }

  function signupHandler() {
    props.history.push("/");
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={images} alt="login-signup" />
      </ImageWrapper>
      <FormWrapper>
        <form onSubmit={submitHandler}>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="enter your email" />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
          />
          <ButtonWrapper>
            <SignupButton onClick={signupHandler} active={false}>
              Signup
            </SignupButton>
            <LoginButton active={true} type="submit">
              Login
            </LoginButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}

export default withRouter(Login);
