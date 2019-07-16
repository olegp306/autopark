import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { add as addDriver } from "../redux/entities/driver/actions";
import { MaterialIcons } from "@expo/vector-icons";
import DriverEditor from "../components/DriverEditor";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addDriver: driver => dispatch(addDriver(driver))
  };
};

class DriverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Новый водитель",
      headerRight: (
        <View style={{ flexDirection: "row", paddingRight: 7 }}>
          <TouchableOpacity onPress={navigation.getParam("save")}>
            <MaterialIcons name="done" size={28} color="#53565A" />
          </TouchableOpacity>
        </View>
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ save: this.save });
    this.props.navigation.setParams({ validation: this.driverValidation });
  }
  componentWillMount = () => {
    const driver = {
      fullName: "",
      birthday: null,
      busModelText: "",
      busAbleToDrive: []
    };
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
      this.props.addDriver(driver);
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
