import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import fire from "../../Config/Fire";
import { useState } from "react";
import { useEffect } from "react";
import Hoc from "../../HOCComponents/Hoc";
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
  Quantity,
  ProductsWrapper,
} from "./Style";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import Loader from "../../Loader/Loader";
import store, { LOADING_FALSE } from "../../../Redux/Store";
import { connect } from "react-redux";

function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [change, setChange] = useState(false);
  const { user } = useContext(UserContext);

  function dataHandler() {
    let tempFeedback = [];
    let tempProducts = [];
    let tempCards = [];

    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(user);

    uid.child("user details").on("value", (snapshot) => {
      setName(snapshot.val().name);
      setEmail(snapshot.val().email);
    });

    uid.child("feedback").on("value", (snapshot) => {
      for (let key in snapshot.val()) {
        tempFeedback.push({
          id: key,
          data: snapshot.val()[key],
        });
      }
      setFeedback(tempFeedback);
    });

    uid.child("purchased").on("value", (snapshot) => {
      for (let key in snapshot.val()) {
        tempProducts.push({
          id: key,
          data: snapshot.val()[key],
        });
      }

      tempProducts.map((products) => {
        tempCards = products.data.data;
        console.log("products in map : ", tempCards);
      });

      setPurchased(tempProducts);
    });
  }

  function nameHandler(e) {
    let username = "";
    let tempEmail = "";
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(user);
    uid.child("user details").update({
      email: fire.auth().currentUser.email,
      name: e.target.value,
    });

    uid.child("user details").on("value", (snapshot) => {
      username = snapshot.val().name;
      tempEmail = snapshot.val().email;
    });
    setName(username);
    setEmail(tempEmail);
  }

  useEffect(() => {
    if (user) {
      store.dispatch({ type: LOADING_FALSE });
      dataHandler();
    }
  }, [user]);

  return !props.loading ? (
    <Hoc>
      <ProfileWrapper>
        <div>
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
              feedback.map((feedback) => (
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
              <Empty>
                you havent submitted feedbacks reagrding products !!
              </Empty>
            )}
            <div>
              <Title>Purchases made : </Title>
              {purchased.length > 0 ? (
                <Purchased>
                  {purchased.map((value) => (
                    <div>
                      <PurchasedTitle>Date</PurchasedTitle>
                      <PurchasedValue>{value.data.date}</PurchasedValue>
                      <PurchasedProducts key={value.data.date}>
                        {value.data.data.map((products) => (
                          <ProductsWrapper key={products.id}>
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
          </Empty>{" "}
        </div>
      </ProfileWrapper>
    </Hoc>
  ) : (
    <Loader />
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(Profile);
