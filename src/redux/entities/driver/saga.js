import { call, put } from "redux-saga/effects";

import {
  isUpdating,
  updated,
  updateFailed,
  isAdding,
  added,
  addingFailed,
  isRemoving,
  removingFailed
} from "./actions";
import api from "../../../api/api.js";

export function* updateDriverSaga(action) {
  yield put(isUpdating());

  try {
    const response = yield call(api.updateDriver, action.payload);
    yield put(updated());
  } catch (error) {
    yield put(updateFailed(error));
  }
}

export function* addDriverSaga(action) {
  yield put(isAdding());

  try {
    const response = yield call(api.addDriver, action.payload);
    yield put(added());
  } catch (error) {
    yield put(addingFailed(error));
  }
}

export function* removeDriverSaga(action) {
  yield put(isRemoving());

  try {
    const response = yield call(api.removeDriver, action.payload);
    yield put(removed());
  } catch (error) {
    yield put(removingFailed(error));
  }
}
