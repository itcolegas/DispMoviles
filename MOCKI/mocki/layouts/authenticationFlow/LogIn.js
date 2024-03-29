import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

//firebase
import firebase from '../../utils/Firebase';
import 'firebase/auth';

//firebase
import firebaseForGoogle from 'firebase';

//expo
import { ResponseType } from 'expo-auth-session';

//google auth
import * as Google from 'expo-auth-session/providers/google';

//para Formularios
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//para scrollView
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//componentes
import CustomLink from '../../components/CustomLink.js';
import CustomButton from '../../components/CustomButton.js';
import FormBox from '../../components/FormBox.js';

//styleSheet
import authStyles from './Authentication.style.js';

const LogIn = ({route, navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '374522304776-m7dtulsej4dtrniu090ighcm3d6kgcoc.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
     const { id_token } = response.params;

     const credential = firebaseForGoogle.auth.GoogleAuthProvider.credential(id_token);
     firebaseForGoogle.auth().signInWithCredential(credential);
   }
  });

  const onSubmit = (data) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
     .then(() => {
       console.log('User account signed in!');
     })
     .catch(error => {
       console.log(error.code);
       if(error.code == 'auth/wrong-password'){
         setError("La contraseña y el correo ingresado no coinciden.");
       }else if (error.code == 'auth/user-not-found'){
           setError("No se encontró una cuenta con este correo.");
       }else{
         setError("Ocurrio un error inesperado. Intentelo de nuevo.");
       }
     });
  };

  const sendPswdRecoveryEmail = () =>{
    navigation.navigate('RecoverPswdForm');
  }

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
        <Text style={authStyles.title}>¡Hola de nuevo!</Text>
        <Text style={authStyles.subtitle}>Nos alegra tenerte de vuelta</Text>
      </View>

      <Text style={[authStyles.error, {height: error ? hp('8') : hp('1')}]}>{error}</Text>

      <View style={[authStyles.formContainer, styles.formContainer]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="envelope"
              tag="Correo electrónico"
              placeholder={errors.email ? "Campo requerido" : "john@gmail.com"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {
                errors.email?.type === "required" && "Llene este campo" ||
                errors.email?.type === "pattern" && "Ingrese un correo valido"
              }
            />
          )}
          name="email"
        rules={{required: true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="lock"
              tag="Contraseña"
              placeholder={errors.password ? "Campo requerido": "***********************"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {
                errors.password?.type === "required" && "Llene este campo"
              }
              secureTextEntry = {true}
            />
          )}
          name="password"
          rules={{required: true}}
        />
      </View>
      <View style={styles.link}>
        <CustomLink
          title="¿Olvidó su contraseña?"
          onPress={() => sendPswdRecoveryEmail()}
        />
      </View>
      <View style={[authStyles.buttonContainer, styles.buttonContainer]}>
        <CustomButton
          title="Iniciar sesión"
          paddingVertical={10}
          onPress={handleSubmit(onSubmit)}
          backgroundColor="#6DD98C"
        />
      </View>
      <View style={[authStyles.buttonContainer, styles.buttonContainer]}>
        <CustomButton
          title="Iniciar sesión con Google"
          paddingVertical={20}
          onPress={() => promptAsync()}
          icon="google"
          backgroundColor="#DB4A39"
        />
       </View>

    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    height: hp('23%'),
  },
  textContainer: {
    height: hp('14%'),
  },
  buttonContainer:{
    height: hp('12%'),
  },
  link:{
    marginLeft: 16,
    marginBottom: 25,
  }
});

export default LogIn;
