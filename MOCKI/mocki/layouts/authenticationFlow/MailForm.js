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

const MailForm = ({navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '374522304776-m7dtulsej4dtrniu090ighcm3d6kgcoc.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
     const { id_token } = response.params;

     const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
     firebase.auth().signInWithCredential(credential);
   }
  });

  const onSubmit = (data) => {
    navigation.navigate('UserAndPswdForm', data);
  };

  return(
    <KeyboardAwareScrollView style={authStyles.viewContainer}>

      <View style={[authStyles.textContainer, styles.textContainer]}>
          <Text style={authStyles.title}>Introduce tu correo electrónico</Text>
          <Text style={authStyles.subtitle}>También puedes iniciar sesión con Google o Facebook</Text>
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
          title="Siguiente"
          paddingVertical={10}
          onPress={handleSubmit(onSubmit)}
          backgroundColor="#6DD98C"
        />
      </View>

      <View style={styles.serviceButtonContainer}>
        <CustomButton
          title="Crear cuenta con Google"
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

export default MailForm;
