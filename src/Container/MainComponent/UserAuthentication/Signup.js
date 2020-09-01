import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  ImageWrapper,
  Image,
  FormWrapper,
  Error,
  Input,
  Label,
  ButtonWrapper,
  SignupButton,
  LoginButton,
  PasswordWrapper,
  Show,
} from "./Style";
import fire from "../../Config/Fire";
import firebase from "firebase";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("password");
  const [images] = useState(require("../../assests/backpack.jpg"));
  const [error, setError] = useState("");
  const [media, setMedia] = useState();

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setMedia(document.body.clientWidth);
  //   });
  // }, [media]);

  function isValidate() {
    if (name.length < 4) {
      console.log("username: ", name.length);
      setError("Username should have minimum 4 characters");
      return false;
    }

    if (!email.includes("@")) {
      setError("incorrect email");
      console.log("email :", email);
      return false;
    }

    if (password.length < 7) {
      console.log("password: ", password, password.length);
      setError("Password should have minimum 7 characters");
      return false;
    }

    if (password !== confirmPassword) {
      console.log("password incorrect :", password, confirmPassword);
      setError("Password and Confirm password does not match");
      return false;
    }
    return true;
  }

  function databaseHandler() {
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(fire.auth().currentUser.uid);
    let details = uid.child("user details");
    details.set({
      name: name,
      email: email,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (isValidate()) {
      console.log("VALIDATE", isValidate());
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log("user in signUp: ", user);
          databaseHandler();
          props.history.push("/login");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setError("Already a user please Login");
          }
          console.log("error in signUp: ", err);
        });
    }
  }

  function loginHandler() {
    props.history.push("/login");
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={images} alt="login-signup" />
      </ImageWrapper>
      <FormWrapper>
        <form onSubmit={submitHandler}>
          <Error error={error}>{error}</Error>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="enter your username"
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <ButtonWrapper>
            <SignupButton active={true} type="submit">
              Signup
            </SignupButton>
            <LoginButton onClick={loginHandler} active={false} type="button">
              Login
            </LoginButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}

export default withRouter(Signup);
