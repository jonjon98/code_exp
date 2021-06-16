import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function EditScreen({ navigation }) {
  const [editName, editSetName] = useState("");
  const [editPrescription, editSetPrescription] = useState("");
  const [editQuantity, editSetQuantity] = useState("");
  //const [id1, setid1] = useState("");
  // const { id1 } = route.params.itemid;

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24 }}>
        Which medication do you want to edit?
      </Text>
      <Text style={{ fontSize: 20 }}>Name of medication:</Text>
      <TextInput
        style={styles.textInput}
        value={editName}
        onChangeText={(input) => editSetName(input)}
      />
      <Text style={{ fontSize: 20 }}>How many pills a day?</Text>
      <TextInput
        style={styles.textInput}
        value={editPrescription}
        onChangeText={(input) => editSetPrescription(input)}
      />
      <Text style={{ fontSize: 20 }}>How many would you like to add?</Text>
      <TextInput
        style={styles.textInput}
        value={editQuantity}
        onChangeText={(input) => editSetQuantity(input)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Inv", {
              editName,
              editPrescription,
              editQuantity,
            })
          }
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("InvStack")}
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
