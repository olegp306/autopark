import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import BigButtonWithBadgeComponent from "../components/BigButtonWithBadgeComponent";

export default class MainScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>auto park</Text>
        </View>
        <View style={styles.content}>
          <BigButtonWithBadgeComponent
            buttonText={"водители"}
            buttonSmallText={"добавление правка удаление просмотр"}
            onPress={() => this.props.navigation.navigate("Drivers")}
          />
          <BigButtonWithBadgeComponent
            buttonText={"автобусы"}
            buttonSmallText={"добавление правка удаление просмотр"}
            onPress={() => this.props.navigation.navigate("Buses")}
          />
          <BigButtonWithBadgeComponent
            buttonText={"маршрут"}
            buttonSmallText={"поиск маршрутов между точками"}
            onPress={() => this.props.navigation.navigate("Cities")}
          />
        </View>
        <View style={styles.bottom}>
          <Text>тестовое задание</Text>
        </View>
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
  },
  head: {
    height: "35%",
    justifyContent: "center"
  },
  content: {
    height: "55%",
    width: "80%",
    justifyContent: "space-around"
  },
  bottom: {
    height: "10%",   
    justifyContent: "space-around" 
  },
  headText: {
    fontSize: 40,
    textAlign: "center",
    color: "gray"
  },

  buttonMenu: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "green"
  }
});
