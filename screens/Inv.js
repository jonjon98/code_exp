import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import firebase from "../database/firebaseDB";

const db = firebase.firestore().collection("inventory");

export default function Inv({ navigation, route }) {
  const [Meds, setMeds] = useState([]);

  function doNothing() {}

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={doNothing}>
          <Ionicons
            name="ios-create-outline"
            size={30}
            color="black"
            style={{
              color: "#f55",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  });

  // Monitor route.params for changes and add items to the database
  useEffect(() => {
    if (
      route.params?.name &&
      route.params?.prescription &&
      route.params?.quantity
    ) {
      const newNote = {
        name: route.params.name,
        prescription: parseInt(route.params.prescription),
        quantity: parseInt(route.params.quantity),
      };
      db.add(newNote); ///////////to send the new note to firebase DB///////////
      //setNotes([...notes, newNote]); //no need this line already as we have firebase
    }
  }, [route.params?.name, route.params?.prescription, route.params?.quantity]);

  // Monitor route.params for changes and change items in the database
  useEffect(() => {
    if (
      route.params?.editName &&
      route.params?.editPrescription &&
      route.params?.editQuantity
    ) {
      let snapshot = db.where("name", "==", route.params.editName).get();
      console.log(snapshot);
      ///////////to send the new note to firebase DB///////////
      //setNotes([...notes, newNote]); //no need this line already as we have firebase
    }
  }, [
    route.params?.editName,
    route.params?.editPrescription,
    route.params?.editQuantity,
  ]);

  ///////////Load firebase data on start///////////
  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const updatedMeds = collection.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setMeds(updatedMeds);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function addMed() {
    navigation.navigate("Add Med");
  }

  function editMed() {
    navigation.navigate("Edit Med");
  }

  // This deletes an individual note
  function deleteNote(id) {
    console.log("Deleting " + id);
    // To delete that item, we filter out the item we don't want
    db.doc(id).delete();
    //setNotes(notes.filter((item) => item.id !== id)); //no need this line already as we have firebase
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ flex: 9 }}>{item.name}</Text>
        <Text style={{ flex: 9 }}>
          You have: {item.quantity} pills left in stock
        </Text>
        <Text style={{ flex: 20 }}>Take {item.prescription} per day</Text>
        <TouchableOpacity onPress={editMed} style={{ flex: 1 }}>
          <AntDesign name="edit" size={16} color="#944" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteNote(item.id)}
          style={{ flex: 1 }}
        >
          <Ionicons name="trash" size={16} color="#944" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addMed}>
        <Ionicons
          name="home"
          size={30}
          color="black"
          style={{
            color: "#f55",
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
      <FlatList
        data={Meds}
        renderItem={renderItem}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
      />
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
});
