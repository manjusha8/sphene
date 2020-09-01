import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 375px) {
    padding: 20px;
  }
  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  width: 40%;
  padding: 50px 20px 0px 20px;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Label = styled.div`
  padding: 15px 0px;
  color: #999;
  font-size: 18px;
  line-height: 1.2;
  padding-left: 2px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #a0a0a0;
  padding: 10px;
  line-height: 24px;
  font-size: 16px;
  font-size: 500;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const Show = styled.div`
  position: absolute;
  right: 0px;
  bottom: 10px;
  color: #44b272;
  cursor: pointer;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

export const LoginButton = styled.button`
  border-radius: 30px;
  height: 50px;
  padding: 0px 50px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "black")};
  background: ${(props) => (props.active ? "#44b272" : "f8f8f8")};
  &:hover {
    background: black;
    color: white;
  }
  @media (max-width: 375px) {
    padding: 0px 30px;
  }
  @media (max-width: 425px) {
    padding: 0px 40px;
  }
  @media (max-width: 320px) {
    padding: 0px 30px;
  }
`;

export const SignupButton = styled.button`
  border-radius: 30px;
  height: 50px;
  padding: 0px 50px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "black")};
  background: ${(props) => (props.active ? "#44b272" : "f8f8f8")};
  &:hover {
    background: black;
    color: white;
  }
  @media (max-width: 375px) {
    padding: 0px 30px;
  }
  @media (max-width: 425px) {
    padding: 0px 40px;
  }
  @media (max-width: 320px) {
    padding: 0px 30px;
  }
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 25px;
  display: ${(props) => (props.error ? "block" : "none")};
`;
