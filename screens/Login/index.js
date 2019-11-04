import React, { PureComponent } from 'react'
import {View, Text,Button} from "react-native"
export default class Login extends PureComponent {
    static navigationOptions = {
        title: 'Login',
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Login Page</Text>
        <Button
        title="Go to dashboard"
        onPress={() => navigate('Dashboard', {name: 'Jane'})}
      />
      </View>
    )
  }
}
