import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Consult from "./screens/Consult";
import Pharm from "./screens/Pharm";
import Inv from "./screens/Inv";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! test push</Text>
      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Consult") {
              iconName = "home";
            } else if (route.name === "Pharm") {
              iconName = "list";
            } else if (route.name === "Inv") {
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
        <Tab.Screen name="Inv" component={Inv} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
>>>>>>> jonjon
  );
}
