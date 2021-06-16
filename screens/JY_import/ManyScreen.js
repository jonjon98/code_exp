import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


function FirstScreen( {navigation} ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events First Page!</Text>
        <Button onPress ={() => navigation.navigate("Screen 2")} 
        title="Second Screen"/>
      </View>
    );
  }

function SecondScreen( {navigation }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: 'lightgreen'}}>
      <Text> Events Second Page!</Text>
      <Button onPress ={() => navigation.navigate("Screen 3")} 
        title="Third Screen"/>
    </View>
    );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events Third Page!</Text>
      <Button
        onPress={() => navigation.popToTop()}
        title="Back to top"
      ></Button>
    </View>
  );
 }
 

const Stack = createStackNavigator()

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Screen 1" component = {FirstScreen} />
      <Stack.Screen name = "Screen 2" component = {SecondScreen} />
      <Stack.Screen name = "Screen 3" component = {ThirdScreen} />

    </Stack.Navigator>
    );
}