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
} from "./Style";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState([]);

  //   {
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  // ]);

  const [images] = useState(require("../../assests/backpack.jpg"));
  const [error, setError] = useState("");

  function isValidate(e) {
    // let temp = user.push([...user, { email, password }]);
    // user = [...temp];
    let tempUser = JSON.parse(localStorage.getItem(email));
    console.log("tempUser: ", tempUser, tempUser.length);
    // for (let i in tempUser) {
    //   if (tempUser[i].email !== email) {
    //     console.log("user not same:", tempUser[i].email);
    if (password === confirmPassword) {
      console.log("password correct");
      return true;
    } else {
      setError("confirm-password doesn't match your password ");
      console.log("error: ", setError);
      return false;
    }
    //   } else {
    //     console.log("user same:", tempUser[i].email);
    //     setError("user already exists");
    //     return false;
    //   }
    // }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (isValidate()) {
      localStorage.setItem(email, JSON.stringify([{ email, password }]));
      props.history.push("/login");
    }
  }

  function loginHandler() {
    props.history.push("/login");
  }

  // const handleChange = (e) => {
  //   setUser([...user, { [e.target.name]: e.target.value }]);
  // };

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
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ButtonWrapper>
            <SignupButton active={true} type="submit">
              Signup
            </SignupButton>
            <LoginButton onClick={loginHandler} active={false}>
              Login
            </LoginButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}

export default withRouter(Signup);
