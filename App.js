import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Provider } from "react-redux";

import {createStackNavigator} from 'react-navigation-stack';
import * as screens from "./screens"
import configureStore from "./redux/configureStore";
const initialState = {};
const store = configureStore(initialState);

const AppStack = createStackNavigator({
  Dashboard: {
    screen: screens.Dashboard
  },
  Leads: {
    screen: screens.Leads
  }
},
{
  initialRouteName: 'Dashboard',
});
const AuthStack = createStackNavigator({ Login: screens.Login });
const AppNavigator =  createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: screens.AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default function App () {
  console.log(store)
return(
  <Provider store={store}>
              <AppNavigator />
            </Provider>
)
  }