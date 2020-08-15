import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 60%;
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  width: 40%;
  padding: 50px 20px 0px 20px;
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
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 25px;
  display: ${(props) => (props.error ? "block" : "none")};
`;
