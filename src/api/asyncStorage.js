import { AsyncStorage } from "react-native";
import _ from "lodash";

const getDrivers = async () => {
  try {
    drivers = (await AsyncStorage.getItem("drivers")) || "none";
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return drivers;
};

const addDriver = async driver => {
  try {
    let drivers = await getDrivers();

    await AsyncStorage.setItem("drivers", drivers.push(driver));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

const updateDrivers = async driver => {
  try {
    drivers = (await AsyncStorage.getItem("drivers")) || "none";
    drivers[0].isUpdate = true;
    //update drivers by driver
    await AsyncStorage.setItem("drivers", drivers);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
}

export default{
    getDrivers,
    addDriver,
    updateDrivers
}


