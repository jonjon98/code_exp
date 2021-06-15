import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import InvStack from "./InvStack";
import AddMed from "./AddMed";
import EditMed from "./EditMed";

const Stack = createStackNavigator();
export default function InvMain() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="InvStack" component={InvStack} />
      <Stack.Screen name="Add Med" component={AddMed} />
      <Stack.Screen name="Edit Med" component={EditMed} />
    </Stack.Navigator>
  );
}
