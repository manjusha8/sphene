import { takeEvery, call, put } from "redux-saga/effects";
import { SET_DATA, GET_DATA, GET_DATA_FAILED } from "../Redux/Store";
import Axios from "axios";

export const watcherGetData = function* () {
  console.log("watchGetData");
  yield takeEvery(GET_DATA, workerGetData);
};

export function* workerGetData() {
  console.log("workerGetData");
  try {
    const url = "https://react-sphene-app-80aae.firebaseio.com/.json";
    const result = yield call(Axios.get, url);
    yield put({
      type: SET_DATA,
      shop: result.data.ShopProducts,
      home: result.data.HomeProducts,
    });
  } catch (e) {
    yield put({ type: GET_DATA_FAILED });
  }
}
