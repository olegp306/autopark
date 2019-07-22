import { call, put } from "redux-saga/effects";

import { isFetching, fetched, fetchFailed, fetch } from "./actions";
import api from "../../../api/api.js";


function* fetchRoutesSaga() {
  yield put(isFetching());
  try {
    const response=yield call(api.fetchRoutes);  
    yield put(fetched(response));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export default fetchRoutesSaga;
