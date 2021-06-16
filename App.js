import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";

import Consult from "./screens/Consult";
import Pharm from "./screens/Pharm";
import InvMain from "./screens/InvMain";
import Settings from "./screens/Settings";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (

    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Consult") {
              iconName = "home";
            } else if (route.name === "Pharm") {
              iconName = "list";
            } else if (route.name === "InvMain") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "Settings") {
              iconName = focused ? "user" : "user-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Consult" component={Consult} />
        <Tab.Screen name="Pharm" component={Pharm} />
        <Tab.Screen name="InvMain" component={InvMain} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
