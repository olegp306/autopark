import { call, put } from "redux-saga/effects";
import { isFetching, fetched, fetchFailed, fetch } from "./actions";
import api from "../../api/api.js";

function* fetchSuggestionsSaga(action) {
  yield put(isFetching());

  try {
    response= yield call(api.fetchAdressSuggestions,action.payload);

    yield put(fetched(response.data.suggestions));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export default fetchSuggestionsSaga;
