import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SelectionItem( {props} ) {
    
    return (
        <TouchableOpacity>
            <Text style={styles.text} > {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item:{
        padding: 16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: '1',
        borderStyle: 'dashed',
        borderRadius: 10
    }
})