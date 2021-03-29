import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const FormBox = (props) => {
  return(
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text, styles.tag}> {props.tag} </Text>
        <FontAwesome name={props.icon} size={16} color="white" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.defaultValue}
        onChangeText={props.onChangeText}
      />
    </>
  );
}

const styles = StyleSheet.create({
  tag:{
    color: 'white',
    marginBottom: 12,
    marginRight: 8,
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Thin',
  },
  input: {
    color: 'white',
    borderColor: 'white',
    height: 40,
    borderWidth: 2,
    borderRadius: 24,
    marginBottom: 32,
    paddingLeft: 16,
  },
  textContainer:{
    flexDirection: "row",
  },
});

export default FormBox;
