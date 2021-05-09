import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//firebase
import firebase from '../../utils/Firebase';
import 'firebase/auth';

//para formularios
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//componentes
import CustomButton from '../../components/CustomButton.js'
import FormBox from '../../components/FormBox.js'

//styleSheet
import authStyles from './Authentication.style.js';

const UserAndPswdForm = ({route, navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const userProfile = {...data, ...route.params};
    console.log(userProfile);
    firebase.auth().createUserWithEmailAndPassword(userProfile.email, userProfile.password)
     .then(() => {
       console.log('User account created & signed in!');
     });
  };

  return(
    <View style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
          <Text style={authStyles.title}>Ya casi terminamos</Text>
      </View>

      <View style={[authStyles.formContainer, styles.formContainer]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="user"
              tag="Nombre de usuario"
              placeholder={errors.user ? "Campo requerido" : "john@gmail.com"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {errors.user}
            />
          )}
          name="user"
          rules={{ required: true }}
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
              error = {errors.password}
              secureTextEntry = {true}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="lock"
              tag="Confirmar contraseña"
              placeholder={errors.password ? "Campo requerido": "***********************"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {errors.password}
              secureTextEntry = {true}
            />
          )}
          name="password"
          rules={{ required: true }}
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

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    height: hp('12%'),
    marginBottom: -20,
  },
  textContainer: {
    height: hp('8'),
  },
  buttonContainer:{
    marginTop: 200,
  },
});

export default UserAndPswdForm;
