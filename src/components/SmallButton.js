import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../theme/colors";

export default class SmallButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.smallContainerWithShadowStyle}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  smallContainerWithShadowStyle: {
    //width: "80%",
    minHeight: 40,
    minWidth: 100,
    justifyContent: "space-evenly",
    borderRadius: 5,
    backgroundColor: Colors.navigatorBackgroudColor,
    shadowOpacity: 0.75,
    shadowRadius: 3,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 }
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
    color: "white"
  },
  buttonSmallText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
    alignItems: "flex-end"
    // marginRight: 10
  }
});
