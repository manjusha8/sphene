import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import fire from "../../Config/Fire";
import { useState } from "react";
import { useEffect } from "react";
import instance from "../../Axios/axios";
import {
  ProfileWrapper,
  Welcome,
  Details,
  UserDetails,
  Title,
  Value,
  Toggle,
  Input,
  FeedbackTitle,
  FeedbackValue,
  Purchased,
  PurchasedTitle,
  PurchasedValue,
  PurchasedProducts,
  Empty,
  ImageWrapper,
  Image,
  ContentWrapper,
  ProductName,
  ProductPrice,
  OfferPrice,
  Feedback,
  Label,
  Heading,
  Group,
  Quantity,
  ProductsWrapper,
} from "./Style";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
// import { Empty, TitleBar } from "../CartHandler/Style";

// import { Feedback } from "@material-ui/icons";

function Profile(props) {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  const [feedback, setFeedback] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [cards, setCards] = useState([]);
  const [change, setChange] = useState(false);

  const { user } = useContext(UserContext);

  function dataHandler() {
    let username = "";
    let email = "";
    let tempFeedback = [];
    let tempProducts = [];
    let cards = [];
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(user);
    uid.child("user details").on("value", (snapshot) => {
      console.log("snapshot users: ", snapshot.val());
      username = snapshot.val().name;
      email = snapshot.val().email;
    });
    uid.child("feedback").on("value", (snapshot) => {
      for (let key in snapshot.val()) {
        tempFeedback.push({
          id: key,
          data: snapshot.val()[key],
        });
      }
      console.log("feedback snapshot: ", tempFeedback);
    });

    uid.child("purchased").on("value", (snapshot) => {
      console.log("purchased :", snapshot.val());
      for (let key in snapshot.val()) {
        tempProducts.push({
          id: key,
          data: snapshot.val()[key],
        });
      }
      tempProducts.map((products, index) => {
        // cards.push([products.data.data]);
        // cards.push({
        //   date: products.data.date,
        //   cards: products.data.data,
        // });
        cards = products.data.data;
        console.log("cards in map : ", cards);
      });
      console.log(" tempProducts :", tempProducts);
      console.log("cards :", cards);
      setCards(cards);
    });

    setFeedback(tempFeedback);
    setName(username);
    setEmail(email);
    setFeedback(tempFeedback);
    setPurchased(tempProducts);
  }

  function nameHandler(e) {
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(user);
    uid.child("user details").update({
      email: email,
      name: e.target.value,
    });
    console.log("email and name: ", email, e.target.value);
  }

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <ProfileWrapper>
      <Welcome>Welcome {name}</Welcome>
      <Details>
        <UserDetails>
          <Title>Username</Title>
          {change ? (
            <Value>
              <Input
                tyep="text"
                name="name"
                placeholder="Give your new name...!!"
                onChange={nameHandler}
              />
              <Toggle onClick={() => setChange(false)}>Done</Toggle>
            </Value>
          ) : (
            <Value>
              {name}
              <Toggle onClick={() => setChange(true)}>Change</Toggle>
            </Value>
          )}
          <Title>email</Title>
          <Value>{email}</Value>
        </UserDetails>
        <Title>Feedback :</Title>
        {feedback.length > 0 ? (
          feedback.map((feedback, index) => (
            <Feedback key={feedback.data.date}>
              <div>
                <FeedbackTitle>Date:</FeedbackTitle>
                <FeedbackValue>{feedback.data.date}</FeedbackValue>
              </div>
              <div>
                <FeedbackTitle>Subject:</FeedbackTitle>
                <FeedbackValue>{feedback.data.subject}</FeedbackValue>
              </div>
              <div>
                <FeedbackTitle>Message: </FeedbackTitle>
                <FeedbackValue>{feedback.data.message}</FeedbackValue>
              </div>
            </Feedback>
          ))
        ) : (
          <Empty>you havent submitted feedbacks reagrding products !!</Empty>
        )}
        <div>
          <Title>Purchases made : </Title>
          {purchased.length > 0 ? (
            <Purchased>
              {purchased.map((value, key) => (
                <div>
                  {console.log("map in purchased:", value)}
                  <PurchasedTitle>Date</PurchasedTitle>
                  <PurchasedValue>{value.data.date}</PurchasedValue>
                  <PurchasedProducts>
                    {value.data.data.map((products, index) => (
                      <ProductsWrapper key={products.id}>
                        {console.log("map in purchased:", products)}
                        <ImageWrapper>
                          <Image
                            src={require(`../../assests/${products.url}`)}
                            alt="products"
                          />
                        </ImageWrapper>
                        <ContentWrapper>
                          <ProductName>{products.name}</ProductName>
                          <ProductPrice offerprice={products.offerprice}>
                            Product Price: ${products.price}
                          </ProductPrice>
                          <OfferPrice offerprice={products.offerprice}>
                            Offer Price:${products.offerprice}
                          </OfferPrice>
                          <Quantity>Quantity: {products.quantity}</Quantity>
                        </ContentWrapper>
                      </ProductsWrapper>
                    ))}
                  </PurchasedProducts>
                </div>
              ))}
            </Purchased>
          ) : (
            <Empty>You haven't purchased any items !!</Empty>
          )}
        </div>
      </Details>
      <Empty>
        <Link to="/shop"> Go Back to Shop </Link>
      </Empty>
    </ProfileWrapper>
  );
}

export default Profile;
