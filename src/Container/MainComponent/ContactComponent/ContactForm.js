import React, { useEffect } from "react";
import {
  Field,
  Name,
  Email,
  Subject,
  Message,
  MessageBox,
  ButtonWrapper,
  Button,
  Input,
  Video,
  Alert,
  HomeTag,
} from "./Style";
import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../Config/Fire";

function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [feedback, setFeedback] = useState();
  const [showMessage, setShowMessage] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setShowMessage(true);
    e.target.reset();
    saveMessage(message, feedback);
    setTimeout(() => setShowMessage(false), 5000);
  }

  function saveMessage(message, feeback) {
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(fire.auth().currentUser.uid);
    let newFeedback = uid.child("feedback").push();
    newFeedback.set({
      message: message,
      subject: feeback,
      date: new Date().toLocaleString(),
    });
    console.log("user feedback: ", newFeedback);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <Field>
          <Name>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Name>
          <Email>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Email>
        </Field>
        <Subject>
          <Input
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Subject>
        <Message>
          <MessageBox
            name="feedback"
            cols="40"
            rows="3"
            placeholder="Feedback"
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </Message>
        <ButtonWrapper>
          <Button type="submit" value="Submit Message" />
        </ButtonWrapper>
      </form>

      {showMessage ? (
        <Alert>Your Feedback has been successfully submitted !!</Alert>
      ) : null}

      <HomeTag>
        Go Back to <Link to="/home">Home</Link>
      </HomeTag>
    </>
  );
}

export default ContactForm;
