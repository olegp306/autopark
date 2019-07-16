import { takeLatest } from "redux-saga/effects";

import { FETCH_BUSES_REQUEST } from "./entities/buses/actions";
import busesSaga from "./entities/buses/saga";
import { UPDATE_BUS_REQUEST, ADD_BUS_REQUEST } from "./entities/bus/actions";
import { updateBusSaga, addBusSaga } from "./entities/bus/saga";

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

function* sagaWatcher() {
  yield takeLatest(FETCH_BUSES_REQUEST, busesSaga);
  yield takeLatest(UPDATE_BUS_REQUEST, updateBusSaga);
  yield takeLatest(ADD_BUS_REQUEST, addBusSaga);
  yield takeLatest(FETCH_DRIVERS_REQUEST, driversSaga);
  yield takeLatest(UPDATE_DRIVER_REQUEST, updateDriverSaga);
  yield takeLatest(ADD_DRIVER_REQUEST, addDriverSaga);

  yield takeLatest(REMOVE_DRIVER_REQUEST, removeDriverSaga);
}

export default sagaWatcher;
