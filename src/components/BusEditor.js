import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { Fumi } from "react-native-textinput-effects";

export default class BusEditor extends Component {
  render() {
    const { bus, updateName, updateMaxSpeed } = this.props;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <ScrollView>
          <Fumi
            value={bus.name}
            label={"Наименование автомобиля,модель... "}
            iconClass={Icon}
            iconName={"directions-car"}
            iconColor={"#53565A"}
            iconSize={20}
            inputStyle={{ color: "#53565A" }}
            style={{
              backgroundColor: "#f7f7f7",
              borderWidth: 0.5,
              borderColor: "#eaeaea"
            }}
            onChangeText={updateName}
          />

          <Fumi
            keyboardType={"numeric"}
            value={bus.maxSpeed}
            label={"максимальная скорость"}
            iconClass={Icon2}
            iconName={"speedometer"}
            iconColor={"#53565A"}
            iconSize={20}
            inputStyle={{ color: "#53565A" }}
            style={{
              backgroundColor: "#f7f7f7",
              borderWidth: 0.5,
              borderColor: "#eaeaea"
            }}
            onChangeText={updateMaxSpeed}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLabel: {
    fontWeight: "bold",
    color: "#53565A",
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 10
  },

  busTypeText: {
    fontSize: 16
  },

  busTypeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  }
});
