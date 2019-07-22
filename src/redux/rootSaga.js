import { takeLatest } from "redux-saga/effects";

import { FETCH_BUSES_REQUEST } from "./entities/buses/actions";
import busesSaga from "./entities/buses/saga";
import {
  UPDATE_BUS_REQUEST,
  ADD_BUS_REQUEST,
  REMOVE_BUS_REQUEST
} from "./entities/bus/actions";
import { updateBusSaga, addBusSaga, removeBusSaga } from "./entities/bus/saga";

import { FETCH_DRIVERS_REQUEST } from "./entities/drivers/actions";
import driversSaga from "./entities/drivers/saga";
import {
  UPDATE_DRIVER_REQUEST,
  ADD_DRIVER_REQUEST,
  REMOVE_DRIVER_REQUEST
} from "./entities/driver/actions";
import {
  updateDriverSaga,
  addDriverSaga,
  removeDriverSaga
} from "./entities/driver/saga";

import { FETCH_SUGGESTIONS_REQUEST } from "./dadata/actions";
import suggestionsAddressSaga from "./dadata/saga";

import { FETCH_ROUTES_REQUEST } from "./entities/routes/actions";
import routesSaga from "./entities/routes/saga";

function* sagaWatcher() {
  yield takeLatest(FETCH_BUSES_REQUEST, busesSaga);
  yield takeLatest(UPDATE_BUS_REQUEST, updateBusSaga);
  yield takeLatest(ADD_BUS_REQUEST, addBusSaga);
  yield takeLatest(REMOVE_BUS_REQUEST, removeBusSaga);

  yield takeLatest(FETCH_DRIVERS_REQUEST, driversSaga);
  yield takeLatest(UPDATE_DRIVER_REQUEST, updateDriverSaga);
  yield takeLatest(ADD_DRIVER_REQUEST, addDriverSaga);
  yield takeLatest(REMOVE_DRIVER_REQUEST, removeDriverSaga);

  yield takeLatest(FETCH_SUGGESTIONS_REQUEST, suggestionsAddressSaga);

  yield takeLatest(FETCH_ROUTES_REQUEST, routesSaga);
}

export default sagaWatcher;
