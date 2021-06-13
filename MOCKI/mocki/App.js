import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Header } from './components/Header';
import { Ionicons, AntDesign } from '@expo/vector-icons';


//firebase
import firebase from "./utils/Firebase";
import "firebase/auth";

//para navegación
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DarkTheme } from "@react-navigation/native";

//layouts
import Menu from "./layouts/Menu";
import FirstScreen from "./layouts/authenticationFlow/FirstScreen";
import LogIn from "./layouts/authenticationFlow/LogIn";
import RecoverPswdForm from "./layouts/authenticationFlow/RecoverPswdForm";
import MailForm from "./layouts/authenticationFlow/MailForm";
import UserAndPswdForm from "./layouts/authenticationFlow/UserAndPswdForm";
import ChangeUserInfoForm from "./layouts/ChangeUserInfoForm";
import DeleteAccountForm from "./layouts/DeleteAccountForm";
import Tips from "./layouts/Tips";
import Tip from "./layouts/Tip";
import Progress from "./layouts/Progress";
import Options from "./layouts/Options";
import MockInterview from "./layouts/MockInterview";
import Problems from "./layouts/Problems";
import Problem from "./layouts/Problem"
import Quiz from "./layouts/Quiz"

export default function App() {
  const Stack = createStackNavigator();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const img_vector = require("./assets/mocki-logoV.png");

  firebase.auth().onAuthStateChanged((user) => {
    user ? setIsSignedIn(true) : setIsSignedIn(false);
  });


  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        {!isSignedIn ? (
          <>
            <Stack.Screen
              name="FirstScreen"
              component={FirstScreen}
              options={{
                title: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MailForm"
              title=""
              component={MailForm}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="UserAndPswdForm"
              title=""
              component={UserAndPswdForm}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="LogIn"
              title=""
              component={LogIn}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="RecoverPswdForm"
              title=""
              component={RecoverPswdForm}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Menu"
              title=""
              component={Menu}
              options={({ navigation }) => ({
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitle: () => (
                  <Image style={styles.image} source={img_vector} />
                ),
                headerTintColor: "white",
                headerRight: () => (
                  <AntDesign
                    name="user"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => navigation.navigate("Options")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Problems"
              title=""
              component={Problems}
              options={({ navigation }) => ({
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitle: () => (
                  <Image style={styles.image} source={img_vector} />
                ),
                headerTintColor: "white",
                headerRight: () => (
                  <AntDesign
                    name="user"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => navigation.navigate("Options")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Problem"
              title=""
              component={Problem}
              options={({ navigation }) => ({
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitle: () => (
                  <Image style={styles.image} source={img_vector} />
                ),
                headerTintColor: "white",
                headerRight: () => (
                  <AntDesign
                    name="user"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => navigation.navigate("Options")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Tips"
              title=""
              component={Tips}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="Tip"
              title=""
              component={Tip}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="Quiz"
              title=""
              component={Quiz}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="Progress"
              title=""
              component={Progress}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="Options"
              title=""
              component={Options}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="ChangeUserInfoForm"
              title=""
              component={ChangeUserInfoForm}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="DeleteAccountForm"
              title=""
              component={DeleteAccountForm}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen
              name="MockInterview"
              title=""
              component={MockInterview}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  image: {
    width: 115,
    height: 75,
    resizeMode: "contain",
  },
  image:{
    width: 115,
    height: 75,
    resizeMode: 'contain'
  }
});
