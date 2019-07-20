import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class BusSm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, maxSpeed } = this.props.bus;
  
    return (
      <View style={styles.busSmall}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.busSmall}>{"Максимальная скорость:" + maxSpeed}</Text>   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  busSmall: {
    marginTop: 15,
    // borderWidth: 0.5,
    borderColor: "#eaeaea",
    justifyContent: "center"
  },
  nameText: {
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
