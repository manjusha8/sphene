import axios from "axios";
import firebase from "../Config/Fire";

const instance = axios.create({
  baseURL: "https://react-sphene-app-80aae.firebaseio.com/",
});

export default instance;
