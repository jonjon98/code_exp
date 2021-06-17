import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function SettingsHeader() {
    return(
        <View style={styles.header}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '80',
        flexDirection: 'row',
        paddingTop:20,
        backgroundColor: 'coral',
        justifyContent: 'center',
    },

    headerText:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#fff',
        letterSpacing: 1,
        textAlign:'center',
        justifyContent:'center',
 
    }
});
