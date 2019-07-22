import { Map } from "immutable";
import {
  FETCH_ROUTES_REQUEST,
  IS_FETCHING_ROUTES,
  FETCHED_ROUTES,
  FETCH_ROUTES_FAILED
} from "./actions";

const initialState = Map({
  items: [],
  isFetching: false,
  fetched: false,
  error: null
});

export default (routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROUTES_REQUEST:
      return state.merge({ isFetching: false, fetched: false, error: null });

    case IS_FETCHING_ROUTES:
      return state.merge({ isFetching: true });

    case FETCHED_ROUTES:
      return state.merge({
        isFetching: false,
        fetched: true,
        items: [...action.payload]
      });

    case FETCH_ROUTES_FAILED:
      return state.merge({ isFetching: false, error: action.payload });

    default:
      return state;
  }
});
