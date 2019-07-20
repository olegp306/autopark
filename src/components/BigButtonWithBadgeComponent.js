import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../theme/colors";


export default class BigButtonWithBadgeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText, buttonSmallText, onPress, bargeText } = this.props;

    return (
      <TouchableOpacity
        style={styles.smallContainerWithShadowStyle}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>

        <Text style={styles.buttonSmallText}>{buttonSmallText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  smallContainerWithShadowStyle: {
    //width: "80%",
    minHeight: 80,
    justifyContent: "space-evenly",
    borderRadius: 5,
    backgroundColor: Colors.navigatorBackgroudColor,
    shadowOpacity: 0.75,
    shadowRadius: 3,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 }
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "white"
  },
  buttonSmallText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
    alignItems: "flex-end",
    // marginRight: 10
  }
});
