import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';

//firebase
import firebase from './utils/Firebase';
import 'firebase/auth';

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
import Tips from './layouts/Tips';
import Tip from './layouts/Tip';
import Progress from './layouts/Progress';

export default function App(){
  const Stack = createStackNavigator();
  const [isSignedIn, setIsSignedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    user ? setIsSignedIn(true) : null;
  });

  return(
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          {!isSignedIn ? (
            <>
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
             </>
           ) : (
             <>
               <Stack.Screen
                name='Menu'
                title=""
                component={Menu}
                options={{
                  title: '',
                  headerStyle:{
                    backgroundColor: 'black',
                  },
                  headerTintColor: 'white',
                }}
               />
               <Stack.Screen
                name='Tips'
                title=""
                component={Tips}
                options={{
                  title: '',
                  headerStyle:{
                    backgroundColor: 'black',
                  },
                  headerTintColor: 'white',
                }}
               />
               <Stack.Screen
                name='Tip'
                title=""
                component={Tip}
                options={{
                  title: '',
                  headerStyle:{
                    backgroundColor: 'black',
                  },
                  headerTintColor: 'white',
                }}
               />
               <Stack.Screen
                name='Progress'
                title=""
                component={Progress}
                options={{
                  title: '',
                  headerStyle:{
                    backgroundColor: 'black',
                  },
                  headerTintColor: 'white',
                }}
               />
             </>
           )}
        </Stack.Navigator>
     </NavigationContainer>
  );
}
