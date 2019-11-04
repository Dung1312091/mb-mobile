import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() => {
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');

    },3000)
  };

  // Render any loading content that you like here
  render() {
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <StatusBar animated={true} backgroundColor="red" barStyle="drak" /> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
export default AuthLoadingScreen