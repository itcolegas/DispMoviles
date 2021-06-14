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

const ChangeUserInfoForm = ({route, navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const user = firebase.auth().currentUser;

  const action = route.params.action;

  const actionContainer = (action == "email") ? styles.emailFormContainer : styles.pswdFormContainer;

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

  const changeEmail = (data) => {
    setError("");
    setMsg("");
    credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      data.current_pswd
    );
    user.reauthenticateWithCredential(credential)
    .then(() => {
      user.updateEmail(data.email)
      .then(() => {
        console.log('Email changed succesfully');
        setMsg('Su correo electrónico se ha cambiado de manera exitosa');
      })
      .catch(error => {
          console.log(error.code);
          setError('Ocurrio un error inesperado. Intentelo de nuevo');
      });
    })
    .catch(error => {
      if(error.code == "auth/wrong-password"){
        setError('La contraseña actual ingresada es incorrecta')
      }
    });
  };

  const changePassword = (data) => {
    setError("");
    setMsg("");
    credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      data.current_pswd
    );
    user.reauthenticateWithCredential(credential)
    .then(() => {
      user.updatePassword(data.new_pswd)
      .then(() => {
        console.log('Password changed succesfully');
        setMsg('Su contraseña se ha cambiado de manera exitosa.');
      })
      .catch(error => {
        setError('Ocurrio un error inesperado. Intentelo de nuevo');
      });
    })
    .catch(error => {
      if(error.code == "auth/wrong-password"){
        setError('La contraseña actual ingresada es incorrecta')
      }
    });
  };

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>
      <View style={[authStyles.textContainer, styles.textContainer]}>
         <Text
          style={authStyles.title}>
          {action == "email"
            ? "Introduzca un nuevo correo electrónico"
            : "Introduzca una nueva contraseña"
          }
         </Text>
         <Text
          style={authStyles.subtitle}>
          {action == "email"
            ? "A partir de ahora iniciará sesión con el correo que ingrese."
            : "A partir de ahora iniciará sesión con la contraseña que ingrese."
          }
         </Text>
      </View>
      <Text style={[authStyles.msg, {height: msg ? hp('10') : hp('0')}]}>{msg}</Text>
      <Text style={[authStyles.error, {height: error ? hp('10') : hp('0')}]}>{error}</Text>
      <View style={[authStyles.formContainer, actionContainer]}>
       <Controller
         control={control}
         render={({ field: { onChange, onBlur, value }}) => (
           <FormBox
             icon="lock"
             tag="Contraseña actual"
             placeholder={errors.password ? "Campo requerido": "***********************"}
             onChangeText={value => onChange(value)}
             defaultValue={value}
             error = {
               errors.current_pswd?.type === "required" && "Llene este campo"
             }
             secureTextEntry = {true}
           />
         )}
         name="current_pswd"
         rules={{required: true}}
       />
       <View style={styles.linkContainer}>
         <CustomLink
           title="¿Olvidó su contraseña?"
           onPress={() => sendPasswordResetEmail()}
         />
       </View>
       {action == "email" ?
         <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="envelope"
              tag="Dirección de email"
              placeholder={"john@gmail.com"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error={
                errors.email?.type === "required" && "Llene este campo" ||
                errors.email?.type === "pattern" && "Ingrese un correo valido"
              }
            />
          )}
          name="email"
          rules={{required: true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}}
        />
        :
        <>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <FormBox
                icon="lock"
                tag="Contraseña nueva"
                placeholder={"***********************"}
                onChangeText={value => onChange(value)}
                defaultValue={value}
                error = {
                  errors.new_pswd?.type === "required" && "Llene este campo" ||
                  errors.new_pswd?.type === "maxLength" && "Debe tener menos de 61 caracteres" ||
                  errors.new_pswd?.type === "minLength" && "Debe tener más de 7 caracteres" ||
                  errors.new_pswd?.type === "pattern" && "Debe contener una mayuscula, una minuscula, un número y un símbolo"
                }
                secureTextEntry = {true}
              />
            )}
            name="new_pswd"
            rules={{
              required: true,
              maxLength: 60,
              minLength: 8,
              //al menos una mayuscula, una minuscula, un número y un símbolo
              pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
            }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <FormBox
                icon="lock"
                tag="Confirmar contraseña nueva"
                placeholder={"***********************"}
                onChangeText={value => onChange(value)}
                defaultValue={value}
                error = {
                  errors.conf_password?.type === "required" && "Llene este campo" ||
                  errors.conf_password?.type === "validate" && "Las contraseñas no coinciden"
                }
                secureTextEntry={true}
              />
            )}
            name="conf_password"
            rules={{required: true, validate: value => value === control.fieldsRef.current.new_pswd._f.value}}
          />
        </>
      }
      </View>
      <View style={authStyles.buttonContainer}>
        <CustomButton
         title={action == "email" ? "Cambiar correo" : "Cambiar contraseña"}
         paddingVertical={10}
         onPress={action == "email" ? handleSubmit(changeEmail) : handleSubmit(changePassword)}
         backgroundColor="#6DD98C"
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  emailFormContainer:{
    height: hp('32'),
  },
  pswdFormContainer:{
    height: hp('42'),
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

export default ChangeUserInfoForm;
