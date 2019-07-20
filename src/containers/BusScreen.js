import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { add as addBus, update as updateBus } from "../redux/entities/bus/actions";
import BusEditor from "../components/BusEditor";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addBus: bus => dispatch(addBus(bus)),
    updateBus: bus=>dispatch(updateBus(bus))    
  };
};

class BusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Редактор автобуса",
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam("save")}>
          <Text style={styles.rightTitleText}>сохранить</Text>
        </TouchableOpacity>
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ save: this.save });
    this.props.navigation.setParams({ validation: this.busValidation });
  }
  componentWillMount = () => {
    let bus = {};
    if (
      this.props.navigation.state.params &&
      this.props.navigation.state.params.item
    ) {
      bus = this.props.navigation.state.params.item;
    } else {
      bus = {
        name: "",
        maxSpeed: 0,     
      };
    }

    this.setState({ bus: bus });
  };

  busValidation = bus => {
    let validationMessage = "";
    validationMessage +=
      bus.name == undefined || bus.name == ""
        ? "Наименование автобуса - обязательно для заполнения. "
        : "";
    validationMessage +=
      bus.maxSpeed == ""
        ? "Максимальная скорость - обязательна для заполнения. "
        : "";
    if (validationMessage == "") return { result: true };
    return { result: false, validationMessage: validationMessage };
  };

  save = () => {
    const { bus } = this.state;
    const validationResult = this.busValidation(bus);
    if (validationResult.result == false) {
      alert(validationResult.validationMessage);
    } else {
      if (bus.id) {
        this.props.updateBus(bus);
      } else {
        this.props.addBus(bus);
      }

      this.props.navigation.navigate("Buses");
    }
  };

  updateName = text => {
    const { bus } = this.state;
    bus.name = text;
    this.setState({ bus });
  };

  updateMaxSpeed = date => {
    const { bus } = this.state;
    bus.maxSpeed = date;
    this.setState({ bus });
  };
  render() {
    const { bus } = this.state;

    return (
      <BusEditor
        bus={bus}
        updateName={this.updateName}
        updateMaxSpeed={this.updateMaxSpeed}       
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusScreen);

const styles = StyleSheet.create({
  rightTitleText: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#0476FA",
    justifyContent: "center"
  }
});
