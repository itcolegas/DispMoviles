import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomLink = ({onPress, title}) => {
  return(
    <TouchableOpacity
     onPress={onPress}
   >
    <Text style={styles.LinkText}>{title}</Text>
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  LinkText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    color: '#6DD98C',
  },
})

export default CustomLink;
