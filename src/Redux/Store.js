import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas/rootSaga";
import { watcherGetData } from "../Sagas/Sagas";

export const QUANTITY_INCREMENT = "QUANTITY_INCREMENT";
export const QUANTITY_DECREMENT = "counter/decrement";
export const CART_COUNTER = "cart/counter";
export const LOADING_FALSE = "loading_false";
export const LOADING_TRUE = "loading_true";
export const SET_DATA = "SET_DATA";
export const SET_HOME_DATA = "SET_HOME_DATA";
export const GET_HOME_DATA = "GET_HOME_DATA";
export const GET_DATA = "GET_DATA";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const WISH_LIST = "WISH_LIST";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EMPTY_CART = "EMPTY_CART";
export const SORT_HANDLER = "SORT_HANDLER";

const initialState = {
  cartCount: 0,
  loading: true,
  quantity: 1,
  products: [],
  homeProducts: [],
  selectedProducts: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUANTITY_INCREMENT: {
      let temp = { ...state };
      temp.selectedProducts.map((value) => {
        if (value.id === action.id) {
          if (value.quantity <= 9) {
            value.quantity = value.quantity + 1;
            console.log("incremented quantity: ", value.quantity);
          }
        }
      });
      return {
        ...state,
        selectedProducts: [...temp.selectedProducts],
      };
    }

    case QUANTITY_DECREMENT: {
      let temp = { ...state };
      temp.selectedProducts.map((value) => {
        console.log("map");
        if (value.id === action.id) {
          if (value.quantity > 1) {
            value.quantity = value.quantity - 1;
            console.log("decremented quantity: ", value.quantity);
          }
        }
      });
      return {
        ...state,
        selectedProducts: [...temp.selectedProducts],
      };
    }

    case REMOVE_PRODUCT: {
      let temp = { ...state };
      temp.selectedProducts.splice(action.id, action.id + 1);
      console.log(temp.selectedProducts);
      return {
        ...state,
        selectedProducts: [...temp.selectedProducts],
      };
    }

    case LOADING_FALSE: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOADING_TRUE: {
      return {
        ...state,
        loading: true,
      };
    }
    case CART_COUNTER: {
      return {
        ...state,
        cartCount: action.value,
      };
    }
    case SET_DATA: {
      console.log("api: ", [...action.shop]);
      console.log("api: ", [...action.home]);
      return {
        ...state,
        loading: false,
        products: [...action.shop],
        homeProducts: [...action.home],
      };
    }

    case SORT_HANDLER: {
      let option = action.event.target.value;
      let sortedList = { ...state };
      sortedList.products.sort((a, b) => {
        return option === "desc"
          ? a.name >= b.name
            ? -1
            : 1
          : a.name <= b.name
          ? -1
          : 1;
      });

      return {
        ...state,
        products: [...sortedList.products],
      };

      // this.setState({ products: sortedList });
    }

    // case SET_HOME_DATA: {
    //   console.log("api: ");
    // }

    case GET_DATA_FAILED: {
      console.log("GET_DATA_FAILED: ", GET_DATA_FAILED);
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case WISH_LIST: {
      let temp = { ...state };
      let flag = false;
      if (temp.selectedProducts.length !== 0) {
        temp.selectedProducts.map((value) => {
          if (value.id === action.value.id) {
            flag = true;
            console.log("setting flag true");
          }
        });
      }
      if (temp.selectedProducts.length === 0 || !flag) {
        temp.selectedProducts = [...temp.selectedProducts, action.value];
      }

      return {
        ...state,
        selectedProducts: [...temp.selectedProducts],
      };
    }

    case EMPTY_CART: {
      return {
        ...state,
        selectedProducts: [],
      };
    }

    default:
      return state;
  }
};

const reduxSagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(reduxSagaMiddleware));
reduxSagaMiddleware.run(rootSaga);

export default store;
