import { StatusBar } from 'expo-status-bar';
import React,  { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//components
import CustomButton from '../../components/CustomButton.js'

//styleSheet
import authStyles from './Authentication.style.js';


const FirstScreen = ({navigation}) => {
  const img_vector = require('../../assets/first_screen_image.png')
  return (
    <View style={authStyles.viewContainer}>

      <View style={authStyles.imageContainer}>
        <Image
          source={img_vector}
          style={{ width: 300, height: 300}}
        />
      </View>

      <View style={[authStyles.textContainer, styles.textContainer]}>
        <Text style={authStyles.title}>Te damos la bienvenida a Mocki</Text>
        <Text
          style={authStyles.subtitle}>
          Unete a miles de personas que utilizan Mocki para prepararse para
          sus entrevistas.
        </Text>
      </View>

      <View style={[authStyles.buttonContainer,  styles.buttonContainer]}>
        <CustomButton
            title="Crear una cuenta"
            paddingVertical={10}
            marginBottom={15}
            onPress={() => navigation.navigate('MailForm')}
            backgroundColor="#6DD98C"
        />
        <CustomButton
          title="Iniciar sesión"
          paddingVertical={10}
          marginBottom={15}
          onPress={() => navigation.navigate('LogIn')}
          backgroundColor="#EDB458"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  buttonContainer:{
    marginTop: 25,
    paddingRight: 30,
    paddingLeft: 30,
  },
});

export default FirstScreen;
