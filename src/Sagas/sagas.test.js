import { watcherGetData, workerGetData } from "./Sagas";
import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { GET_DATA, SET_DATA, GET_DATA_FAILED } from "../Redux/Store";
import Axios from "axios";

import sagaHelper from "redux-saga-testing";

describe("sagas testing", () => {
  describe("worker home data ", () => {
    const it = sagaHelper(workerGetData());

    it("Should listen for api call", (result) => {
      expect(result).toEqual(
        call(Axios.get, "https://react-sphene-app-80aae.firebaseio.com/.json")
      );
      return { data: { message: "success" } };
    });
    it("Should store data", (result) => {
      console.log("result : ", result);
      expect(result).toEqual(
        put({
          type: SET_DATA,
          shop: undefined,
          home: undefined,
        })
      );
    });
  });

  describe("worker home data fails", () => {
    const it = sagaHelper(workerGetData());

    it("Should listen for api call", (result) => {
      expect(result).toEqual(
        call(Axios.get, "https://react-sphene-app-80aae.firebaseio.com/.json")
      );
      return new Error("Something wrong!");
    });
    it("Should store data", () => {
      put({
        type: GET_DATA_FAILED,
      });
    });
  });

  describe("sagas watcher", () => {
    it("Should execute get data Watcher", () => {
      let gen = watcherGetData();
      expect(gen.next(false).value).toEqual(takeEvery(GET_DATA, workerGetData));
      expect(gen.next(true).done).toBeTruthy();
    });
  });
});
