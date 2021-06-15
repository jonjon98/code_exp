import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function AddScreen({ navigation }) {
  const [name, setName] = useState("");
  const [prescription, setPrescription] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24 }}>What do you want to add?</Text>
      <Text style={{ fontSize: 20 }}>Name of medication:</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={(input) => setName(input)}
      />
      <Text style={{ fontSize: 20 }}>How many pills a day?</Text>
      <TextInput
        style={styles.textInput}
        value={prescription}
        onChangeText={(input) => setPrescription(input)}
      />
      <Text style={{ fontSize: 20 }}>How many would you like to add?</Text>
      <TextInput
        style={styles.textInput}
        value={quantity}
        onChangeText={(input) => setQuantity(input)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Inv", { name, prescription, quantity })
          }
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{text.toUpperCase()}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
