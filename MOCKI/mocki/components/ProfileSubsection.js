import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const ProfileSubsection = ({baseInfo, innerInfo}) => {
  return(
    <>
    <Text style={styles.baseInfo}>{baseInfo}</Text>
    <Text style={styles.innerInfo}>{innerInfo}</Text>
    </>
  );
}


const styles = StyleSheet.create({
  baseInfo:{
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 16,
    color: 'white'
  },
  innerInfo:{
    fontFamily: 'HelveticaNeue-Thin',
    marginTop: 5,
    fontSize: 15,
    color: 'white'
  },
})

export default ProfileSubsection;
