import { AsyncStorage } from "react-native";
const fetchAllBuses = () => {
  //
};

const addBus = bus => {
  //
};
const updateBus = bus => {
  //
};

const fetchAllDrivers = () => {
  return AsyncStorage.getItem("@autoparkmobapp6:drivers").then(response =>
    JSON.parse(response)
  );
};

const addDriver = async driver => {
  driver.id = "a" + Math.random() * 30000;
  let drivers = await AsyncStorage.getItem("@autoparkmobapp6:drivers");

  let result = [];
  if (drivers == null) {
    result.push(driver); //JSON.stringify(driver);
  } else {
    const driverAr = JSON.parse(drivers);
    driverAr.push(driver);
    result=driverAr;
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp6:drivers",
    JSON.stringify(result)
  );
};

const updateDriver = async driver => {
  const drivers = await AsyncStorage.getItem("@autoparkmobapp6:drivers");
  const driversAr = JSON.parse(drivers);

  let result = driversAr.filter(item => item.id != driver.id);
  result.push(driver);
  return AsyncStorage.setItem(
    "@autoparkmobapp6:drivers",
    JSON.stringify(result)
  );
};

const removeDriver = async driver => {
  let drivers = await AsyncStorage.getItem("@autoparkmobapp6:drivers");
  let result = [];
  if (drivers != null) {
    result = JSON.parse(drivers).filter(function(item) {
      return item.id != driver.id;
    });
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp6:drivers",
    JSON.stringify(result)
  );
};

export default {
  fetchAllBuses,
  addBus,
  updateBus,
  fetchAllDrivers,
  addDriver,
  updateDriver,
  removeDriver
};
