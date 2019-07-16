import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { getDrivers } from "../redux/selectors";
import { fetch as fetchDrivers } from "../redux/entities/drivers/actions";
import {
  update as updateDriver,
  remove as removeDriver
} from "../redux/entities/driver/actions";

import DriverSm from "../components/DriverSm";

const mapStateToProps = store => {
  return {
    drivers: getDrivers(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
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

  driversListRender = () => {
    const { drivers, removeDriver } = this.props;
    return (
      <FlatList
        data={drivers.items}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={{ backgroundColor: "#f7f7f7" }}>
            <DriverSm driver={item} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                borderBottomWidth: 2,
                borderBottomColor: "white"
              }}
            >
              <Text
                onPress={() => console.log("редактировать " + item.id)}
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
  }

  render() {
    return <View>{this.driversListRender()}</View>;
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
  }
});
