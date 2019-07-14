import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DriversScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: "Водители",
      headerRight: (
        <Text
          style={styles.rightTitleText}
          onPress={() => navigation.navigate("Driver")}
        >
          {" "}
          + добавить
        </Text>
      )
    };
  };
  render() {
    return (
      <View>
        <Text> DriversScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rightTitleText: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#0476FA",
    justifyContent: "center"
    // alignItems: "center"
  }
});
