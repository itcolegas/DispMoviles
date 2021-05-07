import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';

//para navegación
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme } from '@react-navigation/native';

//layouts
import Menu from './layouts/Menu';
import FirstScreen from './layouts/authenticationFlow/FirstScreen';
import LogIn from './layouts/authenticationFlow/LogIn';
import MailForm from './layouts/authenticationFlow/MailForm';
import UserAndPswdForm from './layouts/authenticationFlow/UserAndPswdForm';

export default function App(){
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
             name='FirstScreen'
             component={FirstScreen}
             options={{
               title:'',
               headerShown: false,
             }}
           />
           <Stack.Screen
            name='MailForm'
            title=""
            component={MailForm}
            options={{
              title: '',
              headerStyle:{
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
           />
           <Stack.Screen
            name='UserAndPswdForm'
            title=""
            component={UserAndPswdForm}
            options={{
              title: '',
              headerStyle:{
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
           />
           <Stack.Screen
            name='LogIn'
            title=""
            component={LogIn}
            options={{
              title: '',
              headerStyle:{
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
           />
        </Stack.Navigator>
     </NavigationContainer>
    </>
  );
}
