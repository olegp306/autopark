import { call, put } from "redux-saga/effects";

import { isFetching, fetched, fetchFailed, fetch } from "./actions";
import api from "../../../api/api.js";

function* fetchDriversSaga() {
  yield put(isFetching());
  try {
    yield call(api.fetchAllDrivers);
    yield put(fetched(response.data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export default fetchDriversSaga;
