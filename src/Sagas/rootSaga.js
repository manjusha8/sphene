import { watcherGetData } from "./Sagas";
import { fork } from "redux-saga/effects";

export default function* () {
  yield fork(watcherGetData);
}
