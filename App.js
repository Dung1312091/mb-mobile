import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation-stack";
import AppIntroSlider from "react-native-app-intro-slider";
import * as screens from "./screens";
import configureStore from "./redux/configureStore";
const initialState = {};
const store = configureStore(initialState);

const slides = [
  {
    key: "somethun",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/intro1.jpeg"),
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/intro2.jpg"),
    backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/intro3.jpg"),
    backgroundColor: "#22bcb5"
  }
];

// const AppStack = createStackNavigator(
//   {
//     Dashboard: {
//       screen: screens.Dashboard
//     },
//     Leads: {
//       screen: screens.Leads
//     }
//   },
//   {
//     initialRouteName: "Dashboard"
//   }
// );
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Home") {
    iconName = "ios-home";
    // We want to add badges to home tab icon
  } else if (routeName === "Leads") {
    iconName = "ios-person";
  } else if (routeName === "Customer") {
    iconName = "ios-people";
  } else if (routeName === "Policies") {
    iconName = "ios-document";
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};
const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: screens.Dashboard
    },
    Leads: {
      screen: screens.Leads
    },
    Customer: {
      screen: screens.Customer
    },
    Policies: {
      screen: screens.Policies
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "#349AD0",
      inactiveTintColor: "gray"
    }
  }
);
const AuthStack = createStackNavigator({
  Login: screens.Login
});
const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: screens.AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default function App() {
  const [showRealApp, setShowRealApp] = useState(true);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.mainContent}>
        <Text style={styles.title}> {item.title} </Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}> {item.text} </Text>
      </View>
    );
  };
  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };
  return (
    <Provider store={store}>
      {showRealApp ? (
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
            <AppNavigator />
          </KeyboardAvoidingView>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          renderItem={renderItem}
          slides={slides}
          onDone={onDone}
          showSkipButton
        />
      )}
    </Provider>
  );
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  }
});
