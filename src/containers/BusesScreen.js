import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList, Icon } from "react-native";
import { getBuses } from "../redux/selectors";
import { fetch as fetchBuses } from "../redux/entities/buses/actions";
import { add as addBus, update as updateBus ,remove as removeBus} from "../redux/entities/bus/actions";
import BusSm from "../components/BusSm"


const mapStateToProps = store => {
  return {
    buses: getBuses(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBuses: () => dispatch(fetchBuses()),
    updateBus: () => dispatch(updateBus()),
    removeBus: bus => dispatch(removeBus(bus))    
  };
};


class BusesScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: "Автобусы",
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

  busesListRender = items => {
  
    const { removeBus, navigation } = this.props;
    return (
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={{ backgroundColor: "#f7f7f7" }}>
            <BusSm bus={item} />
            <View style={styles.buttonsContainer}>
              <Text
                onPress={() => navigation.navigate("Bus", { item })}
                style={[styles.textButton, { color: "#0476FA" }]}
              >
                редактировать
              </Text>
              <Text
                onPress={() => removeBus(item)}
                style={[styles.textButton, { color: "red" }]}
              >
                удалить
              </Text>
            </View>
          </View>
        )}
      />
    );
  };

  componentDidMount() {
    this.props.fetchBuses();
  }

  render() {
    const { items, isFetching } = this.props.buses;
    const orderedItems = items.sort((a, b) => a.name > b.name);

    return (
      <Loader message="загрузка" isLoading={isFetching}>
        <View>{this.busesListRender(orderedItems)}</View>
      </Loader>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusesScreen);

const styles = StyleSheet.create({
  rightTitleText: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#0476FA",
    justifyContent: "center"
  },
  textButton: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "white"
  }
});

