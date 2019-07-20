import { AsyncStorage } from "react-native";

const fetchAllBuses = () => {
  return AsyncStorage.getItem("@autoparkmobapp8:buses").then(response =>
    JSON.parse(response)
  );
};

const addBus = async bus => {
  bus.id = "a" + Math.random() * 30000;
  let buses = await AsyncStorage.getItem("@autoparkmobapp8:buses");

  let result = [];
  if (buses == null) {
    result.push(bus); //JSON.stringify(driver);
  } else {
    const busesAr = JSON.parse(buses);
    busesAr.push(bus);
    result = busesAr;
  }
  return AsyncStorage.setItem("@autoparkmobapp8:buses", JSON.stringify(result));
};

const updateBus = async bus => {
  const buses = await AsyncStorage.getItem("@autoparkmobapp8:buses");
  const busesAr = JSON.parse(buses);

  let result = busesAr.filter(item => item.id != bus.id);
  result.push(bus);
  return AsyncStorage.setItem(
    "@autoparkmobapp8:buses",
    JSON.stringify(result)
  );
};

const removeBus= async bus => {
  let buses = await AsyncStorage.getItem("@autoparkmobapp8:buses");
  let result = [];
  if (buses != null) {
    result = JSON.parse(buses).filter(function(item) {
      return item.id != bus.id;
    });
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp8:buses",
    JSON.stringify(result)
  );
};


const fetchAllDrivers = () => {
  return AsyncStorage.getItem("@autoparkmobapp8:drivers").then(response =>
    JSON.parse(response)
  );
};

const addDriver = async driver => {
  driver.id = "a" + Math.random() * 30000;
  let drivers = await AsyncStorage.getItem("@autoparkmobapp8:drivers");

  let result = [];
  if (drivers == null) {
    result.push(driver); //JSON.stringify(driver);
  } else {
    const driverAr = JSON.parse(drivers);
    driverAr.push(driver);
    result = driverAr;
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp8:drivers",
    JSON.stringify(result)
  );
};

const updateDriver = async driver => {
  const items = await AsyncStorage.getItem("@autoparkmobapp8:drivers");
  const itemsAr = JSON.parse(items);

  let result = itemsAr.filter(item => item.id != driver.id);
  result.push(driver);
  return AsyncStorage.setItem(
    "@autoparkmobapp8:drivers",
    JSON.stringify(result)
  );
};

const removeDriver = async driver => {
  let items = await AsyncStorage.getItem("@autoparkmobapp8:drivers");
  let result = [];
  if (items != null) {
    result = JSON.parse(items).filter(function(item) {
      return item.id != driver.id;
    });
  }
  return AsyncStorage.setItem(
    "@autoparkmobapp8:drivers",
    JSON.stringify(result)
  );
};

export default {
  fetchAllBuses,
  addBus,
  updateBus,
  removeBus,
  updateBus,
  fetchAllDrivers,
  addDriver,
  updateDriver,
  removeDriver
};
