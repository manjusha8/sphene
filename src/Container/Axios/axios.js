import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-sphene-app-80aae.firebaseio.com/",
});

export default instance;
