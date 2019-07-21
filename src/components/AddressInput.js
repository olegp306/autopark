import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { getAddressSuggestions } from "../redux/selectors";
import {
  fetch as fetchAddressSuggestions,
  reset as resetSuggestions
} from "../redux/dadata/actions";

const mapStateToProps = store => {
  return {
    addressSuggestions: getAddressSuggestions(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAddressSuggestions: query => dispatch(fetchAddressSuggestions(query)),
    resetSuggestions: () => dispatch(resetSuggestions())
  };
};

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      fetchAddressSuggestions,
      resetSuggestions,
      addressSuggestions,
      onSelectItem
    } = this.props;
    const addressSuggestionsAr = addressSuggestions.items.map(function(
      item,
      index
    ) {
      return { id: index, name: item.value };
    });
    return (
      <Fragment>
        <SearchableDropdown
          onItemSelect={item => {
            const items = addressSuggestionsAr;
            items.push(item);
            this.setState({ selectedItems: items });
            onSelectItem(item);
            resetSuggestions();
          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const items = this.state.selectedItems.filter(
              sitem => sitem.id !== item.id
            );
            this.setState({ selectedItems: items });
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: "#ddd",
            borderColor: "#bbb",
            borderWidth: 1,
            borderRadius: 5
          }}
          itemTextStyle={{ color: "#222" }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={addressSuggestionsAr}
          defaultIndex={2}
          resetValue={false}
          textInputProps={{
            placeholder: "placeholder",
            underlineColorAndroid: "transparent",
            style: {
              padding: 12,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5
            },
            onTextChange: text => {
              fetchAddressSuggestions(text);
            }
          }}
          listProps={{
            nestedScrollEnabled: true
          }}
        />
      </Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressInput);
