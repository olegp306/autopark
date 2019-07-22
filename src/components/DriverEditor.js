import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Fumi } from "react-native-textinput-effects";
import DatePicker from "react-native-datepicker";
import ModalSelector from "react-native-modal-selector";
import _ from "lodash"


export default class DriverEditor extends Component {

  busesAbleToDriveRender = () => {
    const { driver, removeBusAbleToDrive , buses} = this.props;
    const busesAr=_.keyBy(buses.items,"id");
    let sourceItems = driver.busesAbleToDrive.map(function(item, index) {
      return (
        <TouchableOpacity
          style={styles.busTypeContainer}
          onPress={() => removeBusAbleToDrive(item)}
        >
          <Text style={styles.busTypeText}>{busesAr[item.busId].name}</Text>
        </TouchableOpacity>
      );
    });
    return sourceItems;
  };

  render() {
    const { driver, buses, updateFIO, updateBirthday, selectBusModel } = this.props;
    const driverBusesAr=_.keyBy(driver.busesAbleToDrive,"busId");
    // const busesAr=_keyBY(buses.items,"id");

    const notUsedBusesTypes = buses.items.filter(function(item) {
      return  !(driverBusesAr.hasOwnProperty (item.id))
    });

    const notUsedBusesForModal = notUsedBusesTypes.map(function(item) {
      return {id:item.id,key:item.id,label:item.name}
    });

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
            value={driver.fullName}
            label={"ФИО водителя"}
            iconClass={Icon}
            iconName={"person"}
            iconColor={"#53565A"}
            iconSize={20}
            inputStyle={{ color: "#53565A" }}
            style={{
              backgroundColor: "#f7f7f7",
              borderWidth: 0.5,
              borderColor: "#eaeaea"
            }}
            onChangeText={updateFIO}
          />
          <Text style={styles.textLabel}>Дата рождения</Text>

          <DatePicker
            style={{ width: 200, alignSelf: "center", marginTop: 5 }}
            date={driver.birthday}
            mode="date"
            placeholder="Выберите дату"
            format="YYYY-MM-DD"
            minDate="1958-01-01"
            maxDate="2020-12-31"
            confirmBtnText="Подтвердить"
            cancelBtnText="Отмена"
            placeholder="Выберите дату рождения"
            customStyles={{
              dateIcon: {
                width: 0
              },
              dateInput: {
                borderRadius: 20,
                borderWidth: 0.5
              }
            }}
            onDateChange={updateBirthday}
          />

          <View style={{ marginTop: 15 }}>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: "#C9C8C7",
                margin: 15
              }}
            />
            <Text style={styles.textLabel}>
              Выберите Модели автобусов, которыми способен управлять водитель:
            </Text>
            {this.busesAbleToDriveRender()}
            {notUsedBusesTypes.length != 0 ? (
              <ModalSelector
                key={new Date()}
                initValue="+ добавить тип автобуса"
                data={notUsedBusesForModal}
                style={{ margin: 8 }}
                cancelText="Отмена"
                onChange={selectBusModel}
              />
            ) : (
              <Text style={{ textAlign: "center" }}>
                нет доступных моделей автобусов
              </Text>
            )}
          </View>
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
