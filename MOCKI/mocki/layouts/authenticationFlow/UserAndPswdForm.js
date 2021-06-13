import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//firebase
import firebase from '../../utils/Firebase';
import 'firebase/auth';

//para formularios
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//para scrollView
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

//componentes
import CustomButton from '../../components/CustomButton.js'
import FormBox from '../../components/FormBox.js'

//styleSheet
import authStyles from './Authentication.style.js';

const UserAndPswdForm = ({route, navigation}) => {

  const {control, handleSubmit, formState: {errors}} = useForm();

  const [error, setError] = useState("");

  const onSubmit = (data) => {
    const userProfile = {...data, ...route.params};
    console.log(userProfile);
    firebase.auth().createUserWithEmailAndPassword(userProfile.email, userProfile.password)
     .then(user => {
       console.log('User account created & signed in!');
       user.user.sendEmailVerification();
     })
     .catch(error => {
       if(error == 'auth/email-already-in-use'){
         setError('La dirección de correo electronico ingresada ya está en uso.');
       }else{
         setError('Ocurrio un error inesperado. Intentelo de nuevo');
       }
     });
  };

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
        <Text style={authStyles.title}>Ya casi terminamos</Text>
      </View>

      <Text style={[authStyles.error, {height: error ? hp('10') : hp('1')}]}>{error}</Text>

      <View style={[authStyles.formContainer, styles.formContainer]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="user"
              tag="Nombre de usuario"
              placeholder={"john@gmail.com"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {errors.user?.type === "required" && "Llene este campo"}
            />
          )}
          name="user"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="lock"
              tag="Contraseña"
              placeholder={"***********************"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {
                errors.password?.type === "required" && "Llene este campo" ||
                errors.password?.type === "maxLength" && "Debe tener menos de 61 caracteres" ||
                errors.password?.type === "minLength" && "Debe tener más de 7 caracteres" ||
                errors.password?.type === "pattern" && "Debe contener una mayuscula, una minuscula, un número y un símbolo"
              }
              secureTextEntry = {true}
            />
          )}
          name="password"
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
              tag="Confirmar contraseña"
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
          rules={{required: true, validate: value => value === control.fieldsRef.current.password._f.value}}
        />
      </View>

      <View style={[authStyles.buttonContainer, styles.buttonContainer]}>
        <CustomButton
          title="Crear una cuenta"
          paddingVertical={10}
          onPress={handleSubmit(onSubmit)}
          backgroundColor="#6DD98C"
        />
      </View>

    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    height: hp('15%'),
  },
  textContainer:{
    height: hp('8'),
  },
  buttonContainer:{
    marginTop: 200,
  }
});

export default UserAndPswdForm;
