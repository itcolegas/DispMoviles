import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';

import Menu from './layouts/Menu';
import SignUp from './SignUp';

export default function App() {
  return (
    <>
    <Header/>
    <Menu/>
    {/*<SignUp/>*/}
    </>
  );
}
