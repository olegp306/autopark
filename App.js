import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/containers/MainScreen";
import DriversScreen from "./src/containers/DriversScreen";
import DriverScreen from "./src/containers/DriverScreen";
import BusesScreen from "./src/containers/BusesScreen";
import BusScreen from "./src/containers/BusScreen";
import RoutePointsScreen from "./src/containers/RoutePointsScreen";
import RoutesScreen from "./src/containers/RoutesScreen";



import { createStackNavigator, createAppContainer } from "react-navigation";

import store from "./src/redux/store";
import { Provider } from "react-redux";

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    Drivers: { screen: DriversScreen },
    Driver: { screen: DriverScreen },
    Buses: { screen: BusesScreen },
    Bus: { screen: BusScreen },
    RoutePoints: { screen: RoutePointsScreen },
    Routes: { screen: RoutesScreen },
  },
  {
    initialRouteName: "Main",
    navigationOptions: { header: null }
  }
);
const AppContainer = createAppContainer(AppNavigator);
const handleNavigationChange = () => {
  console.log("handleNavigationChange");
};

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppContainer
          onNavigationStateChange={handleNavigationChange}
          uriPrefix="/app"
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  }
});
