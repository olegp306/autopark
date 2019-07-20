import { Map } from "immutable";
import {
  UPDATE_DRIVER_REQUEST,
  IS_UPDATING_DRIVER,
  UPDATED_DRIVER,
  UPDATE_DRIVER_FAILED
} from "./actions";
import { ADD_DRIVER_REQUEST, IS_ADDING_DRIVER, ADDED_DRIVER, ADDING_DRIVER_FAILED } from "./actions";

const initialState = Map({
  item: null,
  isUpdating: false,
  updated: false,
  isAdding: false,
  added: false,
  error: null
});

export default (driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DRIVER_REQUEST:
      return initialState;

    case IS_UPDATING_DRIVER:
      return state.merge({ isUpdating: true });

    case UPDATED_DRIVER:
      return state.merge({ isUpdating: false, updated: true });

    case UPDATE_DRIVER_FAILED:
      return state.merge({ isUpdating: false, error: action.payload });

    case ADD_DRIVER_REQUEST:
      return initialState;

    case IS_ADDING_DRIVER:
      return state.merge({ isAdding: true });

    case ADDED_DRIVER:
      return state.merge({ isAdding: false, added: true });

    case ADDING_DRIVER_FAILED:
      return state.merge({ isAdding: false, error: action.payload });

    default:
      return state;
  }
});
