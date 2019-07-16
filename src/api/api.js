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
  return AsyncStorage.getItem("@autoparkmobapp2:drivers").then(response =>
    JSON.parse(response)
  );
};

const addDriver = async driver => {
  driver.id = "a" + Math.random() * 30000;
  let drivers = await AsyncStorage.getItem("@autoparkmobapp2:drivers");

  let result = [];
  if (drivers == null) {
    result.push(driver); //JSON.stringify(driver);
  } else {
    result = JSON.parse(drivers);
    result.push(driver);
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp2:drivers",
    JSON.stringify(result)
  );
};
const updateDriver = driver => {
  //
};
const removeDriver = async driver => {
  let drivers = await AsyncStorage.getItem("@autoparkmobapp2:drivers");

  let result = [];
  if (drivers != null) {
    result = JSON.parse(drivers).filter(function(item) {
      return item.id != driver.id;
    });
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp2:drivers",
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
