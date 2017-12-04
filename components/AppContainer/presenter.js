import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
  };
  componentWillReceiveProps = nextProps => {
    const { initApp, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      if (nextProps.isLoggedIn && nextProps.profile) {
        if (nextProps.profile.username) {
          initApp(nextProps.profile.username);
        }
      }
    }
  };
  componentDidMount() {
    const { isLoggedIn, profile, initApp } = this.props;
    if (isLoggedIn && profile) {
      initApp(profile.username);
    }
  }
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation screenProps={{ username: profile.username }} />
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default AppContainer;
