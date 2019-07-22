import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SmallButton from "../components/SmallButton";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import { getRoutes, getDrivers, getBuses } from "../redux/selectors";
import { fetch as fetchRoutes } from "../redux/entities/routes/actions";
import { fetch as fetchDrivers } from "../redux/entities/drivers/actions";
import { fetch as fetchBuses } from "../redux/entities/buses/actions";
import Colors from "../theme/colors";
import _ from "lodash";

const workHours = 8;

const mapStateToProps = store => {
  return {
    routes: getRoutes(store),
    drivers: getDrivers(store),
    buses: getBuses(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBuses: () => dispatch(fetchBuses()),
    fetchDrivers: () => dispatch(fetchDrivers()),
    fetchRoutes: params => dispatch(fetchRoutes(params))
  };
};

class RoutesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      elementCount: 5
    };
  }

  componentDidMount() {
    this.props.fetchBuses();
    this.props.fetchDrivers();
    this.fetchRoutesOnPage();
  }

  fetchRoutesOnPage = () => {
    const params = {
      page: this.state.page,
      elementCount: this.state.elementCount
    };
    this.props.fetchRoutes(params);
  };
  movePageUp = () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchRoutesOnPage();
  };

  movePageDown = () => {
    if (this.state.page != 1) {
      this.setState({ page: this.state.page - 1 });
      this.fetchRoutesOnPage();
    }
  };

  getListRoutesData = () => {
    const { drivers, buses, routes } = this.props;
    const busesObjAr = _.keyBy(buses.items, "id");
    let items = [];
    for (let a = 0; a < routes.items.length; a++) {
      const route = routes.items[a];
      for (let b = 0; b < drivers.items.length; b++) {
        const driver = drivers.items[b];
        for (let c = 0; c < driver.busesAbleToDrive.length; c++) {
          const driverBus = driver.busesAbleToDrive[c];
          items.push({
            driver,
            bus: busesObjAr[driverBus.busId],
            route,
            time:
              route.distance / busesObjAr[driverBus.busId].maxSpeed / workHours
          });
        }
      }
    }
    return _.sortBy(items, "time");
  };

  routesListRender = () => {
    const page = this.state.page;
    const elementCount = this.state.elementCount;
    const itemsSortAr = this.getListRoutesData();

    const itemsSortArPerPage = itemsSortAr.slice(
      (page - 1) * elementCount,
      elementCount * page
    );
    return (
      <FlatList
        data={itemsSortArPerPage}
        keyExtractor={(item, index) =>
          item.driver.id + item.bus.id + item.route.id
        }
        renderItem={({ item }) => (
          <View key={item.id} style={{ backgroundColor: "#f7f7f7" }}>
            <View style={styles.routeConteiner}>
              <Text style={styles.bus}>
                {"маршрут id:" +
                  item.route.id +
                  "дистанция: " +
                  item.route.distance +
                  " км."}
              </Text>
              <Text style={styles.driver}>
                {"Водитель: " + item.driver.fullName}
              </Text>
              <Text style={styles.bus}>
                {"Автобус:" +
                  item.bus.name +
                  " макс. срорость: " +
                  item.bus.maxSpeed +
                  " км./час"}
              </Text>
              <Text style={styles.time}>
                {"Время в пути: " + item.time + " дня"}
              </Text>
            </View>
          </View>
        )}
      />
    );
  };

  render() {
    const { buses, drivers, routes } = this.props;
    if (buses.isFetching || drivers.isFetching || routes.isFetching)
      return (
        <Loader
          message="загрузка"
          isLoading={
            buses.isFetching || drivers.isFetching || routes.isFetching
          }
        />
      );
    return (
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Text> самый быстрый вариант сверху </Text>
        <View style={{ maxHeight: "80%" }}>{this.routesListRender()}</View>

        <View style={styles.paginatorContainer}>
          <SmallButton buttonText={"назад"} onPress={this.movePageDown} />

          <Text>{this.state.page}</Text>
          <SmallButton buttonText={"вперед"} onPress={this.movePageUp} />
        </View>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesScreen);

const styles = StyleSheet.create({
  routeConteiner: {
    margin: 5,
    // border: 1,
    // borderStyle: "solid",
    borderRadius: 15,
    borderColor: "#eaeaea",
    backgroundColor: "white",
    justifyContent: "center"
  },

  paginatorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5
    // backgroundColor: "green"
  },
  driver: {
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 10
  },
  bus: {
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 10
  },
  time: {
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10
  },
  pagginatorButton: {
    color: Colors.navigatorBackgroudColor
  }
});
