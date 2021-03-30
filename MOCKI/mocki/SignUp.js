import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

import FormBox from './FormBox.js'


const SignUp = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  function sendDataToBack(){
    if(user == "" || email == "" || password == "" || passwordConf == ""){
      console.log("Error. Forma incompleta");
    }else{
      if(password == passwordConf){
        console.log(
          "'user': " + user +
          "\n 'email': " + email +
          "\n 'password': " + password
        );
      }else{
        console.log("Error. Contraseñas no coinciden");
      }
    }
  }

  return (
    <View style={styles.viewContainer}>

      <View style={styles.formContainer}>
        <Text style= {styles.textContainer}>
          <Text style={styles.title}>CREA UNA CUENTA</Text>
          {"\n"}
          <Text style={styles.subtitle}>Registrate para comenzar</Text>
        </Text>

        <FormBox
          icon="user"
          tag="Nombre de usuario"
          placeholder="John Cena"
          onChangeText={user => setUser(user)}
          defaultValue={user.data}
        />

        <FormBox
          icon="envelope"
          tag="Dirección de email"
          placeholder="john@gmail.com"
          onChangeText={email => setEmail(email)}
          defaultValue={email.data}
        />

        <FormBox
          icon="lock"
          tag="Contraseña"
          placeholder="******************"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          defaultValue={password.data}
        />

        <FormBox
          icon="rotate-left"
          tag="Confirmar contraseña"
          placeholder="******************"
          secureTextEntry={true}
          onChangeText={passwordConf => setPasswordConf(passwordConf)}
          defaultValue={passwordConf.data}
        />

        <Button
          title="Crear mi cuenta"
          color="green"
          onPress={sendDataToBack}
        />

        <Text
          style={styles.info}>
          ¿Ya tienes una cuenta? {/* <a href="./SignIn">Entrar</a> */}
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#454145',
  },
  formContainer:{
    color: 'white',
    marginBottom: 32,
    marginTop: 32,
    marginLeft: 25,
    marginRight:25,
  },
  textContainer:{
    marginBottom: 32,
  },
  title:{
    color: 'white',
    fontSize: 32,
    fontFamily: 'HelveticaNeue-Bold',
  },
  subtitle:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium',
  },
  info:{
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'HelveticaNeue-Thin',
  },
});

export default SignUp;
