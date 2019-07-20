import { call, put } from "redux-saga/effects";

import {fetch as fetchBuses} from "../buses/actions"

import {
  isUpdating,
  updated,
  updateFailed,
  isAdding,
  added,
  addingFailed,
  isRemoving,
  removingFailed,
  removed
} from "./actions";
import api from "../../../api/api.js";

export function* updateBusSaga(action) {
  yield put(isUpdating());

  try {
    const response = yield call(api.updateBus, action.payload);
    yield put(updated());
    yield put(fetchBuses());  
  } catch (error) {
    yield put(updateFailed(error));
  }
}

export function* addBusSaga(action) {
  yield put(isAdding());

  try {
    const response = yield call(api.addBus, action.payload);
    yield put(added());
    yield put(fetchBuses());  
  } catch (error) {
    yield put(addingFailed(error));
  }
}

export function* removeBusSaga(action) {
  yield put(isRemoving());

  try {
    const response = yield call(api.removeBus, action.payload);
    yield put(removed());
    yield put(fetchBuses());    
  } catch (error) {
    yield put(removingFailed(error));
  }
}

