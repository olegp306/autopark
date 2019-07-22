import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getDrivers, getBuses } from "../redux/selectors";
import { fetch as fetchDrivers } from "../redux/entities/drivers/actions";
import { fetch as fetchBuses } from "../redux/entities/buses/actions";
import {
  update as updateDriver,
  remove as removeDriver
} from "../redux/entities/driver/actions";

import DriverSm from "../components/DriverSm";
import Loader from "../components/Loader";
import _ from "lodash";

const mapStateToProps = store => {
  return {
    drivers: getDrivers(store),
    buses: getBuses(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
    fetchBuses: () => dispatch(fetchBuses()),
    updateDriver: () => dispatch(updateDriver()),
    removeDriver: driver => dispatch(removeDriver(driver))
  };
};

class DriversScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Водители",
      headerRight: (
        <Text
          style={styles.rightTitleText}
          onPress={() => navigation.navigate("Driver")}
        >
          + добавить
        </Text>
      )
    };
  };

  getBusesAbleToDriveNamesAr = driver => {
    const { buses } = this.props;
    const busesAr = _.keyBy(buses.items, "id");
    
    const result= driver.busesAbleToDrive.map(function(item) {
      return busesAr[item.busId].name;
    });
    return result
  };

  driversListRender = items => {
    const { removeDriver, navigation, buses } = this.props;

    return (
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={{ backgroundColor: "#f7f7f7" }}>
            <DriverSm
              driver={item}
              busesNamesAr={this.getBusesAbleToDriveNamesAr(item)}
            />
            <View style={styles.buttonsContainer}>
              <Text
                onPress={() => navigation.navigate("Driver", { item })}
                style={[styles.textButton, { color: "#0476FA" }]}
              >
                редактировать
              </Text>
              <Text
                onPress={() => removeDriver(item)}
                style={[styles.textButton, { color: "red" }]}
              >
                удалить
              </Text>
            </View>
          </View>
        )}
      />
    );
  };

  componentDidMount() {
    this.props.fetchDrivers();
    this.props.fetchBuses();
  }

  render() {
    const { drivers, buses } = this.props;
    const orderedItems = drivers.items.sort((a, b) => a.fullName > b.fullName);

    return (
      <Loader
        message="загрузка"
        isLoading={drivers.isFetching || buses.isFetching}
      >
        {drivers.isFetching || buses.isFetching ? null : (
          <View>{this.driversListRender(orderedItems)}</View>
        )}
      </Loader>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriversScreen);

const styles = StyleSheet.create({
  rightTitleText: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#0476FA",
    justifyContent: "center"
  },
  textButton: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "white"
  }
});
