import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  @media (max-width: 375px) {
    display: block;
    padding: 20px;
  }
  @media (max-width: 425px) {
    display: block;
    padding: 20px;
  }
  @media (max-width: 320px) {
    display: block;
    padding: 10px;
  }
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const LeftWrapper = styled.div`
  width: 25%;
  margin-right: 30px;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  width: 70%;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  margin: 20px auto;
`;

export const Name = styled.div`
  width: 49%;
  display: inline-block;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

export const Email = styled(Name)``;

export const Subject = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
`;

export const Message = styled(Subject)``;

export const MessageBox = styled.textarea`
  width: 100%;
  min-height: 200px !important;
  margin: 15px 0 25px 0;
  cursor: text;
  padding: 12px 18px;
  outline: none;
  font-size: 15px;
  color: #909090;
  box-sizing: border-box;
  display: block;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  min-height: 53px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
`;

export const ButtonWrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  padding: 12px 18px;
  outline: none;
  font-size: 15px;
  color: #909090;
  box-sizing: border-box;
  display: block;
  cursor: text;
  background-color: #fff;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  min-height: 53px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
`;

export const Button = styled.input`
  border: 2px solid;
  border-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 10px 26px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 50px;
  background: #fff;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.background};
    color: white;
  }
`;

export const Video = styled.div`
  width: 100%;
`;

export const Alert = styled.div`
  margin: 20px;
  padding: 10px;
  background: #44b272;
  color: white;
`;

export const HomeTag = styled.div`
  margin: 20px;
  color: black;
  font-weight: 600;
`;
