import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View} from 'react-native';

//firebase
import firebase from 'firebase';

//expo
import { ResponseType } from 'expo-auth-session';

//google auth
import * as Google from 'expo-auth-session/providers/google';

//para formulario
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//para scrollView
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

//componentes
import CustomButton from '../components/CustomButton.js'
import FormBox from '../components/FormBox.js'
import CustomLink from '../components/CustomLink.js'

//styleSheet
import authStyles from './authenticationFlow/Authentication.style.js';

const DeleteAccountForm = ({navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const user = firebase.auth().currentUser;

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  let credential = null;

  const sendPasswordResetEmail = () => {
    firebase.auth().sendPasswordResetEmail(user.email)
    .then(() => {
      setMsg('Se le ha enviado un correo con los siguientes pasos a seguir');
    })
    .catch(error => {
      setError('Ocurrio un error inesperado. Intentelo de nuevo');
    });
  }
  
  const deleteAccount = (data) => {
    setError("");
    setMsg("");
    credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      data.password
    );
    user.reauthenticateWithCredential(credential)
    .then(() => {
      user.delete();
    })
    .catch(error => {
        console.log(error.code);
        if(error.code == 'auth/wrong-password'){
          setError('La contraseña ingresada es incorrecta');
        }else{
          setError('Ocurrio un error inesperado. Intentelo de nuevo');
        }
    });
  };

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>
      <View style={[authStyles.textContainer, styles.textContainer]}>
          <Text style={authStyles.title}>¿Seguro que desea borrar su cuenta?</Text>
          <Text style={authStyles.subtitle}>
            Esta acción no se puede deshacer. Perderá todo su progreso.
          </Text>
      </View>

      <Text style={[authStyles.msg, {height: msg ? hp('10') : hp('0')}]}>{msg}</Text>
      <Text style={[authStyles.error, {height: error ? hp('10') : hp('0')}]}>{error}</Text>

      <View style={[authStyles.formContainer, styles.formContainer]}>
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
        <View style={styles.linkContainer}>
          <CustomLink
            title="¿Olvidó su contraseña?"
            onPress={() => sendPasswordResetEmail()}
          />
        </View>
      </View>

      <View style={authStyles.buttonContainer}>
        <CustomButton
          title="Borrar"
          paddingVertical={10}
          onPress={handleSubmit(deleteAccount)}
          backgroundColor="#f22a27"
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    height: hp('18'),
  },
  textContainer: {
    height: hp('22%'),
  },
  linkContainer:{
    marginTop: -10,
    marginBottom: 30,
    marginLeft: 8
  }
});

export default DeleteAccountForm;
