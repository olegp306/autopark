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
        <Text style={styles.nameText}>{"Название:" +name}</Text>
        <Text style={styles.maxSpeedText}>{"Максимальная скорость:" + maxSpeed}</Text>   
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
  fullNameText: {
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 10
  },
  maxSpeedText:{
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 10
  },
  nameText: {
    fontWeight: "500",
    fontSize: 20,
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
