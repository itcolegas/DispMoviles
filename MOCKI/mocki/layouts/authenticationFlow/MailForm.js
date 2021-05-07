import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View} from 'react-native';

//para formulario
import { useForm, Controller } from "react-hook-form";

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//componentes
import CustomButton from '../../components/CustomButton.js'
import FormBox from '../../components/FormBox.js'

//styleSheet
import authStyles from './Authentication.style.js';

const MailForm = ({navigation}) => {

  const {control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigation.navigate('UserAndPswdForm', data);
  };

  return(
    <View style={authStyles.viewContainer}>

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
              placeholder={errors.email ? "Llene este campo" : "john@gmail.com"}
              onChangeText={value => onChange(value)}
              defaultValue={value}
              error = {errors.email}
            />
          )}
          name="email"
          rules={{required: true}}
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
          title="Log in with Facebook"
          paddingVertical={20}
          marginBottom={35}
          onPress={console.log()}
          icon="facebook-f"
          backgroundColor="#3B5998"
        />
        <CustomButton
          title="Log in with Google"
          paddingVertical={20}
          onPress={console.log()}
          icon="google"
          backgroundColor="#DB4A39"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    height: hp('12%'),
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
