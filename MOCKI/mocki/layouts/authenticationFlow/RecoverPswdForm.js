import { StatusBar } from 'expo-status-bar';
import React  from 'react';
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
import CustomButton from '../../components/CustomButton.js'
import FormBox from '../../components/FormBox.js'

//styleSheet
import authStyles from './Authentication.style.js';

const RecoverPswdForm = ({navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    firebase.auth().sendPasswordResetEmail(data.email);
  };

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
          <Text style={authStyles.title}>Introduce tu correo electrónico</Text>
          <Text style={authStyles.subtitle}>Te enviaremos un correo con los siguientes pasos a seguir</Text>
      </View>

      <View style={[authStyles.formContainer, styles.formContainer]}>
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
      </View>

      <View style={authStyles.buttonContainer}>
        <CustomButton
          title="Enviar"
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
    height: hp('12.5%'),
  },
  textContainer: {
    height: hp('22%'),
  },
  serviceButtonContainer:{
    height: hp('20%'),
    marginTop:30,
    paddingRight:15,
    paddingLeft:15,
  }
});

export default RecoverPswdForm;
