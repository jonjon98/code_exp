import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import firebase from "../database/firebaseDB";

//const db = firebase.firestore().collection("consults");

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
