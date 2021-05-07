import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

//para iconos
import { FontAwesome } from '@expo/vector-icons';

const FormBox = (props) => {
  return(
    <>
      <View style={styles.textContainer}>
        <Text style={styles.tag}> {props.tag} </Text>
      </View>

      <View style={styles.searchSection}>
        <FontAwesome style={styles.searchIcon} name={props.icon} size={16} color="white" />
        <TextInput style={styles.text}
          style={props.error ? [styles.input, styles.inputWithError] : styles.input}
          placeholder={props.placeholder}
          placeholderTextColor='gray'
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          autoCorrect={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tag:{
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Thin',
    color: 'white',
    marginBottom: 5,
  },
  searchIcon: {
    padding: 10,
  },
  searchSection: {
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    marginLeft: -25,
    paddingLeft: 25,
    marginBottom: 20,
    height: 40,
    color: 'white',
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  inputWithError: {
    borderColor: 'red',
  }
});

export default FormBox;
