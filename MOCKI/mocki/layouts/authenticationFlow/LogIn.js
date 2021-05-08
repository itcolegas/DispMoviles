import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

//para Formularios
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


//componentes
import CustomButton from '../../components/CustomButton.js'
import FormBox from '../../components/FormBox.js'

//styleSheet
import authStyles from './Authentication.style.js';

const LogIn = ({route, navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm()
  ;
  const onSubmit = (data) => {
    navigation.navigate('Menu')
  };

  return(
    <View style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
        <Text style={authStyles.title}>¡Hola de nuevo!</Text>
        <Text style={authStyles.subtitle}>Nos alegra tenerte de vuelta</Text>
      </View>

      <View style={[authStyles.formContainer, styles.formContainer]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <FormBox
              icon="user"
              tag="Correo electrónico"
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

        <TouchableOpacity
          onPress={console.log()}
        >
          <Text style={styles.link}>
            ¿Olvidaste tu contraseña?
          </Text>
       </TouchableOpacity>

      </View>

     <View style={[authStyles.buttonContainer, styles.buttonContainer]}>
        <CustomButton
          title="Iniciar sesión"
          paddingVertical={10}
          onPress={handleSubmit(onSubmit)}
          backgroundColor="#6DD98C"
        />
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  link:{
    marginTop:-5,
    color: '#6DD98C',
    fontSize:12,
  },
  formContainer:{
    height: hp('15%'),
  },
  textContainer: {
    height: hp('15%'),
  },
  buttonContainer:{
    marginTop: 100,
  }
});

export default LogIn;
