import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inv from "./Inv";

const InnerStack = createStackNavigator();
export default function InvStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Inv"
        component={Inv}
        options={{
          title: "Inventory",
          headerStyle: {
            backgroundColor: "#FFFFFF",
            height: 100,
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
          headerTintColor: "#f55",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      />
    </InnerStack.Navigator>
  );
}
