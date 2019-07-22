import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DriverSm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { fullName, birthday, busesNamesAr } = this.props.driver;
    // const busesAbleToDriveNamesAr = busesAbleToDrive.map(function(item) {
    //   return item["label"];
    // });
    return (
      <View style={styles.driverSmall}>
        <Text style={styles.fullNameText}>{"ФИО: " +fullName}</Text>
        <Text style={styles.birthdayText}>{"Дата рождения: " +birthday}</Text>
        <Text style={styles.busesText}>
          { "Умеет управлять: " + this.props.busesNamesAr.join(", ")}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  driverSmall: {
    marginTop: 5,  
    borderColor: "#eaeaea",
    justifyContent: "center"
  },
  fullNameText: {
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 10
  },
  birthdayText:{
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 10
  },
  busesText:{
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 10
  },
  textSmall: {
    fontWeight: "bold",
    color: "#53565A",
    fontSize: 14,
    alignSelf: "center",
    marginBottom: 10
  }
});
