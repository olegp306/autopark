import { Map } from "immutable";
import {
  FETCH_SUGGESTIONS_REQUEST,
  IS_FETCHING_SUGGESTIONS,
  FETCHED_SUGGESTIONS,
  FETCH_SUGGESTIONS_FAILED,
  RESET_SUGGESTIONS
} from "./actions";

const initialState = Map({
  items: [],
  isFetching: false,
  fetched: false,
  error: null
});

export default (busesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS_REQUEST:
      return state.merge({ isFetching: false, fetched: false, error: null });

    case IS_FETCHING_SUGGESTIONS:
      return state.merge({ isFetching: true });

    case FETCHED_SUGGESTIONS:
      return state.merge({
        isFetching: false,
        fetched: true,
        items: [...action.payload]
      });

    case FETCH_SUGGESTIONS_FAILED:
      return state.merge({ isFetching: false, error: action.payload });

    case RESET_SUGGESTIONS:
      return initialState;

    default:
      return state;
  }
});
