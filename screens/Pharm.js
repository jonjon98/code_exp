import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Alert, TextInput,  } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import firebase from "../database/firebaseDB";

const ph = firebase.firestore().collection("Pharm");
const prescription = firebase.firestore().collection("Prescription")



function pay(med, qty, modalVis) {
  
  if (med == "Paracetemol") {
    var price = 10
  } else { 
    var price = 15
  }
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVis}
    onRequestClose={() => {
      // Alert.alert("Modal has been closed.");
      setModalVis(!modalVis);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{Medicine}</Text>
        
        <Text style={styles.modalText}>Amount: {price * qty}</Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Cardholder: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Card Number: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Expiartion Date: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>CVV: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => { setModalVis(!modalVis); }
          }
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

  )
}


const Pharm = () => {
  const [u,setUser] = useState('user');
  const [modalVisible, setModalVisible] = useState(false);
  const [Location, setLocation] = useState('')
  const [Quantity, setQuantity] = useState('')
  const [DT, setDT] = useState('')
  const [Medicine, setMed] = useState('')
  // const [ps, setPS] = useState([])
  const [modalVis, setModalVis] = useState(false);

  prescription
  .where("userID", "==", "user")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      var pills = documentSnapshot.get("Meds")
      var qty = documentSnapshot.get("Qty")
      console.log('Med: ', pills, qty );
    })
  })

  if (Medicine == "Paracetemol") {
    var price = 10
  } else { 
    var price = 15
  }

  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{Medicine}</Text>
          <Text style={styles.modalText}>Quantity: </Text>
          <TextInput 
            style={styles.input}
            onChangeText={(val) => setQuantity(val)}
          />
          <Text style={styles.modalText}>Location: </Text>
          <TextInput 
            style={styles.input}
            onChangeText={(val) => setLocation(val)}
          />
          <Text style={styles.modalText}>Delivery: </Text>
          <TextInput 
            style={styles.input}
            onChangeText={(val) => setDT(val)}
          />
          
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => { setModalVisible(!modalVisible); 
              ph.add(
              {User: {u},
              Med: {Medicine},
              Qty: {Quantity},
              Loc: {Location},
              DT : {DT} },
            ).then(() => {console.log('Cart Updated')})
            .then( () => {setModalVis(true)
            })}      
            }
          >
            <Text style={styles.textStyle}>Confirm</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)
            }
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVis}
    onRequestClose={() => {
      // Alert.alert("Modal has been closed.");
      setModalVis(!modalVis);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{Medicine}</Text>
        
        <Text style={styles.modalText}>Amount: {price * Quantity}</Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Cardholder: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Card Number: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>Expiration Date: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Text style={styles.modalText}>CVV: </Text>
        <TextInput 
          style={styles.input}
          
        />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => { setModalVis(!modalVis); setModalVisible(false)}
          }
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => { setModalVisible(true); setMed('Paracetemol') } }
    >
      <Text style={styles.textStyle}>Panadol</Text>
    </Pressable>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => { setModalVisible(true); setMed('Cough Syrup') } }
    >
      <Text style={styles.textStyle}>Cough Syrup</Text>
    </Pressable>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => { setModalVisible(true); setMed('Acetaminophen') } }
    >
      <Text style={styles.textStyle}>Acetaminophen</Text>
    </Pressable>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => { setModalVisible(true); setMed('Ibuprofen') } }
    >
      <Text style={styles.textStyle}>Ibuprofen</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 5,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    width:200,
  }
});

export default Pharm;