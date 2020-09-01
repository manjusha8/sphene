import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc",
  authDomain: "react-sphene-app-80aae.firebaseapp.com",
  databaseURL: "https://react-sphene-app-80aae.firebaseio.com",
  projectId: "react-sphene-app-80aae",
  storageBucket: "react-sphene-app-80aae.appspot.com",
  messagingSenderId: "429188678656",
  appId: "1:429188678656:web:a69479a5038231c17e44e5",
  measurementId: "G-WE3MM9G4YD",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
