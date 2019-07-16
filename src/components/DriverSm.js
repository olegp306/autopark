import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DriverSm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { fullName, birthday, busAbleToDrive } = this.props.driver;
    const busAbleToDriveNamesAr = busAbleToDrive.map(function(item) {
      return item["label"];
    });
    return (
      <View style={styles.driverSmall}>
        <Text style={styles.fullNameText}>{fullName}</Text>
        <Text style={styles.driverSmall}>{birthday}</Text>
        <Text style={styles.driverSmall}>
          {busAbleToDriveNamesAr.join(", ")}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  driverSmall: {
    marginTop: 15,
    // borderWidth: 0.5,
    borderColor: "#eaeaea",
    justifyContent: "center"
  },
  fullNameText: {
    fontWeight: "bold",
    color: "#53565A",
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 10
  },
  textSmall: {
    fontWeight: "bold",
    color: "#53565A",
    fontSize: 14,
    alignSelf: "center",
    marginBottom: 10
  }
});
