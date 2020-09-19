export default (state, action) => {
  console.log("reducers : ", state);
  switch (action.type) {
    case "CART_COUNT":
      return { cartCount: state.cartCount };

    default:
      return state;
  }
};
