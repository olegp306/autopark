import { Map } from "immutable";
import {
  FETCH_DRIVERS_REQUEST,
  IS_FETCHING_DRIVERS,
  FETCHED_DRIVERS,
  FETCH_DRIVERS_FAILED
} from "./actions";

const initialState = Map({
  items: [],
  isFetching: false,
  fetched: false,
  error: null
});

export default (driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_REQUEST:
      return state.merge({ isFetching: false, fetched: false, error: null });

    case IS_FETCHING_DRIVERS:
      return state.merge({ isFetching: true });

    case FETCHED_DRIVERS:
      return state.merge({
        isFetching: false,
        fetched: true,
        items: [...action.payload]
      });

    case FETCH_DRIVERS_FAILED:
      return state.merge({ isFetching: false, error: action.payload });

    default:
      return state;
  }
});
