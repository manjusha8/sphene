export default (state, action) => {
  switch (action.type) {
    case "cartCount":
      return { cartCount: action.incrementCount };

    default:
      return state;
  }
};
