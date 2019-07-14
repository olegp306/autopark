import { call, put } from "redux-saga/effects";
import { isFetching, fetched, fetchFailed, fetch } from "./actions";
import api from "../../api";

function* fetchBusesSaga() {
  yield put(isFetching());

  try {
    yield call(api.fetchAllBuses);

    yield put(fetched(response.data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export default fetchBusesSaga;
