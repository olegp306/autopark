import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import AddressInput from "../components/AddressInput";
import BigButtonWithBadgeComponent from "../components/BigButtonWithBadgeComponent";

export default class RoutePointsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointA:"",
      pointB:""
    };
  }
  
  onSearchRoutesHandler=()=>{
    if(this.state.pointA!="" &&  this.state.pointB!="")
    {
      this.props.navigation.navigate("Routes")
    }
    else{
      alert("данные о точке начала А или B не заполнены ")
    }
  }

  render() {
    return (
      <View>
        <Text> точка А </Text>
        <AddressInput onSelectItem={(item)=>this.setState({ pointA: item.name }) }/>
        <Text> точка B </Text>
        <AddressInput onSelectItem={(item)=>this.setState({ pointB: item.name }) }/>    

        <BigButtonWithBadgeComponent
            buttonText={"Поиск маршрутов"}
            buttonSmallText={"(поиск возможных маршрутов)"}
            onPress={this.onSearchRoutesHandler}
          />
      </View>
    );
  }
}
