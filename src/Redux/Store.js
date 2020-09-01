import { createStore } from "redux";
import Reducer from "../Redux/Reducer";

function Store(state = { cartCount: 0 }) {
  console.log("store: ", state.cartCount);
  return createStore(Reducer, state);
}

export default Store;
