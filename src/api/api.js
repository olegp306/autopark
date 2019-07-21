import { AsyncStorage } from "react-native";
import axios from 'axios'

const conf = {
  //baseURL: API_SERVER_URL,
  headers: { 'Cache-Control': 'no-cache' },
  timeout: 15000 
}
const dadaToken="5d14cbb232618388cf7ab1c71f84e283d3a3e9c0"
const instance = axios.create(conf)
const onError = (error) => {
  if (error.response) {
      console.warn('axios onError', error.response)

      if (error.response.status === 400) {
          throw Error('Не верный логин или пароль')
      } else if (error.response.status > 400) {
          throw Error('При обработке запроса на сервере произошла ошибка, мы ее зафиксировали и уже разбираемся в причинах.')
      }
  } else if (error.request) {
      console.warn('axios onError', error.request)
      throw Error('Сервер недоступен. Проверьте свое интернет-соединение')
  } else {
      console.warn('Error', error.message)
  }
  console.log(error.config)
}

const fetchAdressSuggestions=(queryText)=>{
  let queryStr={ "query": queryText, "count": 10 };  
  instance.defaults.headers.authorization=`Token ${dadaToken}`
  return instance.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', queryStr ).catch(onError)
}

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
  removeDriver,
  fetchAdressSuggestions
};
