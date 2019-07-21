import { combineReducers } from "redux";
import drivers from "./entities/drivers/reducers";
import driver from "./entities/driver/reducers";
import buses from "./entities/buses/reducers";
import bus from "./entities/bus/reducers";
import suggestions from "./dadata/reducers";

const root = combineReducers({
  drivers,
  driver,
  buses,
  bus,
  suggestions
});

export default root;
