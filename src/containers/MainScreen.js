import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="водители"  onPress={() => this.props.navigation.navigate('Drivers')}/>
        <Button title="автобусы"  onPress={() => this.props.navigation.navigate('Buses')}/>
        <Button title="маршрут" onPress={() => this.props.navigation.navigate('Cities')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
