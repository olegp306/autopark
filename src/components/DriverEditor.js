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

const busTypes = [
  { id: 1, key: 1, label: "ЛИАЗ" },
  { id: 2, key: 2, label: "ПАЗ" },
  { id: 3, key: 3, label: "Экарус" }
];

export default class DriverEditor extends Component {
  busesAbleToDriveRender = () => {
    const { driver, removeBusAbleToDrive } = this.props;
    let sourceItems = driver.busAbleToDrive.map(function(item, index) {
      return (
        <TouchableOpacity
          style={styles.busTypeContainer}
          onPress={() => removeBusAbleToDrive(item)}
        >
          <Text style={styles.busTypeText}>{item.label}</Text>
        </TouchableOpacity>
      );
    });
    return sourceItems;
  };

  render() {
    const { driver, updateFIO, updateBirthday, selectBusModel } = this.props;
    const notUsedBusTypes = busTypes.filter(
      item => !driver.busAbleToDrive.includes(item)
    );
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
            {notUsedBusTypes.length != 0 ? (
              <ModalSelector
                key={new Date()}
                initValue="+ добавить тип автобуса"
                data={notUsedBusTypes}
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
