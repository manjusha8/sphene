import React, { useState } from "react";
import {
  Wrapper,
  ImageWrapper,
  Image,
  FormWrapper,
  Label,
  Input,
  PasswordWrapper,
  Show,
  ButtonWrapper,
  SignupButton,
  LoginButton,
  Error,
} from "./Style";
import { withRouter } from "react-router-dom";
import fire from "../../Config/Fire";
import firebase from "firebase";

function Login(props) {
  const [images] = useState(require("../../assests/backpack.jpg"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("password");

  function submitHandler(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user in login: ", user);
        setTimeout(() => {
          props.history.push("/home");
        }, 500);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          setError("New user!! Please Signup");
        }
        if (err.code === "auth/wrong-password") {
          setError("incorrect Password");
          console.log("error in login: ", err);
        }
      });
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
          <Error error={error}>{error}</Error>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Password</Label>
          <PasswordWrapper>
            <Input
              type={type}
              name="password"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Show
              onClick={() => {
                type === "password" ? setType("text") : setType("password");
              }}
            >
              {type === "password" ? "show" : "hide"}
            </Show>
          </PasswordWrapper>
          <ButtonWrapper>
            <SignupButton onClick={signupHandler} active={false} type="button">
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
