import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Icon } from "react-native";
import { blue } from "ansi-colors";

export default class BusesScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: "Атобусы",
      headerRight: (
        <Text
          style={styles.rightTitleText}
          onPress={() => navigation.navigate("Bus")}
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
        <Text> BusesScreen </Text>
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
