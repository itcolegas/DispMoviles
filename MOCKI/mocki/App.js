import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './Header'
import SignUp from './SignUp'

export default function App() {
  return (
    <>
      <Header/>
      <SignUp/>
    </>
  );
}
