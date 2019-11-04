import React, { PureComponent } from "react";
import { View, Text, ImageBackground } from "react-native";
import LoginForm from "./form";
import { globalStyle } from "../../globalStyle";

export default class Login extends PureComponent {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../../assets/nen2.png")}
        style={{ flex: 1 }}
      >
        <LoginForm navigate={navigate} />
      </ImageBackground>
    );
  }
}
