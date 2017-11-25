import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import HomeScreen from "./presenter";
import { Ionicons } from "@expo/vector-icons";

class Container extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Ionicons name="ios-home" size={30} color={"black"} />;
      } else {
        return <Ionicons name="ios-home-outline" size={30} color={"black"} />;
      }
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return <HomeScreen navigate={navigate} />;
  }
}

export default Container;