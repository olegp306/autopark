import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { add as addDriver, update as updateDriver } from "../redux/entities/driver/actions";
import { MaterialIcons } from "@expo/vector-icons";
import DriverEditor from "../components/DriverEditor";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addDriver: driver => dispatch(addDriver(driver)),
    updateDriver: driver=>dispatch(updateDriver(driver))    
  };
};

class DriverScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Редактор водителя",
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam("save")}>
          <Text style={styles.rightTitleText}>сохранить</Text>
        </TouchableOpacity>
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ save: this.save });
    this.props.navigation.setParams({ validation: this.driverValidation });
  }
  componentWillMount = () => {
    let driver = {};
    if (
      this.props.navigation.state.params &&
      this.props.navigation.state.params.item
    ) {
      driver = this.props.navigation.state.params.item;
    } else {
      driver = {
        fullName: "",
        birthday: null,
        busModelText: "",
        busAbleToDrive: []
      };
    }

    this.setState({ driver: driver });
  };

  driverValidation = driver => {
    let validationMessage = "";
    validationMessage +=
      driver.fullName == undefined || driver.fullName == ""
        ? "ФИО водителя - обязательно для заполнения. "
        : "";
    validationMessage +=
      driver.birthday == ""
        ? "Дата рождения - обязательна для заполнения. "
        : "";
    validationMessage +=
      driver.busAbleToDrive == ""
        ? "У Водителя должен быть хобя бы одна модель автобуса, которой он может управлять. "
        : "";
    if (validationMessage == "") return { result: true };
    return { result: false, validationMessage: validationMessage };
  };

  save = () => {
    const { driver } = this.state;
    const validationResult = this.driverValidation(driver);
    if (validationResult.result == false) {
      alert(validationResult.validationMessage);
    } else {
      if (driver.id) {
        this.props.updateDriver(driver);
      } else {
        this.props.addDriver(driver);
      }

      this.props.navigation.navigate("Drivers");
    }
  };

  updateFIO = text => {
    const { driver } = this.state;
    driver.fullName = text;
    this.setState({ driver });
  };

  updateBirthday = date => {
    const { driver } = this.state;
    driver.birthday = date;
    this.setState({ driver });
  };

  updateBus = busType => {
    const { driver } = this.state;
    driver.busAbleToDrive.push(busType);
    this.setState({ driver });
  };
  removeBusAbleToDrive = busType => {
    const { driver } = this.state;
    driver.busAbleToDrive = driver.busAbleToDrive.filter(
      item => item.id != busType.id
    );
    this.setState({ driver });
  };

  render() {
    const { driver } = this.state;

    return (
      <DriverEditor
        driver={driver}
        updateFIO={this.updateFIO}
        updateBirthday={this.updateBirthday}
        selectBusModel={this.updateBus}
        removeBusAbleToDrive={this.removeBusAbleToDrive}
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverScreen);

const styles = StyleSheet.create({
  rightTitleText: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#0476FA",
    justifyContent: "center"
  }
});
