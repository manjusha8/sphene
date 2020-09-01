import React from "react";
import "./App.css";
import { connect } from "react-redux";
import IncrementCountAction from "./Redux/IncrementCountAction";
import Routing from "./Container/RouteComponent/Routing";
// import Store from "./Redux/Store";
// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={Store()}>
    <div>
      <Routing />
    </div>
    // </Provider>
  );
}

const mapStateToProps = (state) => ({
  ...state,
  // return {
  //   cartCount: state.cartCount,
  // }
});

const mapDispatchToProps = (dispatch) => ({
  IncrementCountAction: () => dispatch(IncrementCountAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
