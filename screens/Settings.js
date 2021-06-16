import React, { useEffect, useState } from "react";
import { Alert,StyleSheet, Text, View, TouchableOpacity,ScrollView,TextInput,Button  } from "react-native";
//import firebase from "../database/firebaseDB"; coming soon...
import SettingsHeader from "./JY_import/Settings_Header";
import { NavigationContainer ,useNavigation } from '@react-navigation/native';
import Panel from 'react-native-panel';
import UsernameInput from "./JY_import/UsernameInput";
import ChangePW from "./JY_import/ChangePW"; 
import { createStackNavigator } from "@react-navigation/stack";

//const db = firebase.firestore().collection("consults");


function Pers_Settings({ navigation }) {
return (
  <View>

  <View style={ styles.item }>
    <TouchableOpacity style={styles.item}
      onPress={() => navigation.navigate('Change Passwords') } /> 
    <Text> Change Password!</Text>
  </View>

  <View style={styles.item}>
    <TouchableOpacity style={styles.item} 
      onPress={() => navigation.navigate('Profile') } />
      <Text> View Profile</Text> 
  </View>

  <View style={styles.item}>
    <TouchableOpacity style={styles.item} 
      onPress={() => navigation.navigate('Payment Details') } />
      <Text> Payment Information </Text> 
  </View>

  </View>
);
}

function PW_change_screen({ navigation }) {

const [curr_PW, set_curr_PW] =useState('Current Password')
const [PW_1, set_PW] =useState('Type New Password')
const [PW_2, confirm_PW] =useState('Retype Password')

var curr = PW_1
var output = ''

return (
  <View>

  <View style={styles.item}>
    <TextInput style={styles.input}
      onChangeText={(val) => set_curr_PW(val)}
      placeholder="Enter new password"
      placeholderTextColor="grey"/>
  </View>

<View style={styles.item}>
  <TextInput
  style={styles.input}
  onChangeText = {(val) => set_PW(val)}
  placeholder="Enter new password"
  placeholderTextColor="grey"/>
</View>

<View style={styles.item}>
  <TextInput
    style={styles.input}
    onChangeText = {(val) => confirm_PW(val)}
    placeholder="Retype new password"
    placeholderTextColor="grey"/>
  </View>
  
  <View>
    <Button title = "Set Password" onPress={() => {if(PW_1 != PW_2){
      Alert("Check Passwords!"); set_PW;(curr);output = "Check Passwords!";} 
      else {Alert("Success");output = "Success";}
      }} />
  </View>

  <View style={styles.item}> 
        <Text style={{alignItems: 'center', justifyContent: 'center'}}> {output} </Text>
  </View>

  </View>  

);

}

function ProfileScreen({ navigation }) {
return (
  <View>
  <View style={styles.item}>
    <TouchableOpacity style={styles.item} 
      onPress={() => navigation.navigate('Change Personal Details')}
    />
    <Text> Update Details</Text>
  </View>
  <View style={styles.field}>
    <Text> Name: {/* Name goes here*/}</Text>
  </View>
  <View style={styles.field}>
    <Text> Address: {/* Address goes here*/}</Text>
  </View>
  <View style={styles.field}>
    <Text> NRIC: {/* Name goes here*/}</Text>
  </View>
  
  </View>
);
}

function ChangePersonals({ navigation }) {
  const [currCat, set_curr_cat] =useState('Category')
  const [currVal, set_new_val] =useState('Value')


  return (
  <View>

  <View style={styles.item}>
  <TextInput style={styles.input}
    onChangeText={(val) => set_curr_cat(val)}
    placeholder="Category"
    placeholderTextColor="grey"/>
  </View>

  <View style={styles.item}>
  <TextInput style={styles.input}
    onChangeText={(val) => set_new_val(val)}
    placeholder="Value"
    placeholderTextColor="grey"/>
  </View>

  <View>
    <Button title = "Update Changes"></Button> {/*dummy buttom*/}
  </View>

  <View style={{marginTop:20}}>
    <Button title = "To Home" onPress={()=> navigation.popToTop() }></Button>
  </View>

  </View>
);
}

function PaymentInfo({ navigation }) {
return (
  <View>

  <View style={styles.item}>
    <TouchableOpacity style={styles.item} 
      onPress ={() => navigation.navigate('Update Payment Details')}
    />
    <Text> Update Payment Details</Text>
  </View>

  <View styles ={styles.item}>
    <Text> WIP </Text>
  </View>
  
  </View>
);
}

function PaymentUpdate({ navigation }) {
return (

  <View style={styles.item}>
    <Text> Payment Update WIP </Text>
  </View>

);
}


const Settings_Stack = createStackNavigator();

function Settings_Stack_call() {
return (
  <Settings_Stack.Navigator>
    <Settings_Stack.Screen name="Personal Settings" component={Pers_Settings} />

    <Settings_Stack.Screen name="Change Passwords" component={PW_change_screen} />

    <Settings_Stack.Screen name="Profile" component={ProfileScreen} />
    <Settings_Stack.Screen name="Change Personal Details" component={ChangePersonals} />
    
    <Settings_Stack.Screen name="Payment Details" component={PaymentInfo} />
    <Settings_Stack.Screen name="Update Payment Details" component={PaymentUpdate} />

  </Settings_Stack.Navigator>
);
}

export default function Settings() {

return (
  <View style={styles.container}>
    <SettingsHeader />
      
      <View style={ styles.no_border_item } >
        <Text> Welcome! {/*variable username goes here */}</Text>
      </View>
      <NavigationContainer independent={true} >
        <Settings_Stack_call />
      </NavigationContainer>
  </View>


)

}

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#fff',
},
field:{    
borderColor: '#bbb',
borderWidth: 1,
borderStyle: 'solid',
borderRadius: 10,
width: '33%',
},
no_border_item:{
  padding: 15,
  marginTop:15,
  borderColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 10,
},
item:{
  padding: 15,
  marginTop:15,
  borderColor: '#bbb',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 10,
},
firstHeaderContainer: {
  backgroundColor: '#ccc',
},

firstHeader: {
  marginHorizontal: 10,
  backgroundColor: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  height: 50,
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
},
subheader:{
  fontsize: 20,
  fontWeight: 'bold',
},
button:{
  marginTop: 20,
  backgroundcolor: 'blue',
  color: 'white',
  textalign: 'center',
  display: 'inline-block',
  fontsize: 16,
}



})


