import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//components
import CustomButton from '../components/CustomButton.js'
import CustomLink from '../components/CustomLink.js'
import ProfileSubsection from '../components/ProfileSubsection.js'

//firebase
import firebase from '../utils/Firebase';
import 'firebase/auth';

//para scrollView
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function Options({navigation}) {

    const user = firebase.auth().currentUser;
    const provider = user.providerData[0].providerId;

    function signOut(){
      firebase.auth().signOut()
      .then(() => console.log('User signed out!'));
    }

    return(
      <KeyboardAwareScrollView style={styles.menu}>

          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Mi perfil</Text>
          </View>

          <View style={styles.infoSection}>
              <Text style={styles.subtitleText}>Mi información</Text>
              <View style={styles.subsection}>
                <ProfileSubsection
                  baseInfo="Correo electrónico"
                  innerInfo={user.email}
                />
                <View style={styles.linkSection}>
                {provider == "password" ?
                  <CustomLink
                    title="Cambiar correo electrónico"
                    onPress={() => {
                        navigation.navigate('ChangeUserInfoForm', { action: "email" })
                      }
                    }
                  />
                  : null}
                </View>
              </View>
              <View style={styles.subsection}>
                <ProfileSubsection
                  baseInfo="Nombre de usuario"
                  innerInfo={user.displayName}
                />
              </View>
          </View>

          <View style={styles.securitySection}>
              <Text style={styles.subtitleText}>Seguridad</Text>
              <View style={styles.subsection}>
                <ProfileSubsection
                  baseInfo="Contraseña"
                  innerInfo={provider == "password" ? "**********************" : "Si desea cambiar su contraseña debe hacerlo desde su cuenta de Google"}
                />
                <View style={styles.linkSection}>
                  {provider == "password" ?
                    <CustomLink
                      title="Cambiar contraseña"
                      onPress={() => {
                          navigation.navigate('ChangeUserInfoForm', { action: "password" })
                        }
                      }
                    />
                    : null}
                </View>
              </View>
              <View style={styles.subsection}>
                <ProfileSubsection
                  baseInfo="¿Cuenta verificada?"
                  innerInfo={user.emailVerified ? "La cuenta ha sido verificada" : "La cuenta no ha sido verificada"}
                />
                <View style={styles.linkSection}>
                  {!user.emailVerified ?
                    <CustomLink
                      title="Enviar correo de verificación"
                      onPress={() => user.sendEmailVerification()}
                    />
                  : null}
                </View>
              </View>
              <View style={styles.subsection}>
              <ProfileSubsection
                baseInfo="Eliminar cuenta"
                innerInfo={provider == "password" ? "Esta acción no se puede deshacer" : "Si desea eliminar su cuenta debe hacerlo desde su cuenta de Google"}
              />
                <View style={styles.linkSection}>
                {provider == "password" ?
                  <CustomLink
                    title="Eliminar cuenta"
                    onPress={() => navigation.navigate('DeleteAccountForm')}
                  />
                  : null}
                </View>
              </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Cerrar sesión"
              paddingVertical={10}
              marginBottom={15}
              onPress={() => signOut()}
              backgroundColor="#EDB458"
            />
         </View>
      </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    menu:{
      backgroundColor: 'black',
      marginLeft: 30,
      marginRight: 30,

    },
    progressSection:{
      height: hp('35%'),
    },
    infoSection:{
      height: hp('28%'),
    },
    securitySection:{
      height: hp('45%'),
    },
    subsection:{
      height: hp('10%'),
      marginBottom: 15,
    },
    titleContainer:{
      height: hp('15%'),
    },
    titleText:{
      fontFamily: 'HelveticaNeue-Medium',
      marginTop: 30,
      fontSize: 40,
      color: 'white'
    },
    subtitleText:{
      marginBottom: 15,
      fontFamily: 'HelveticaNeue',
      fontSize: 25,
      color: 'white'
    },
    linkSection:{
      marginTop: 8,
    },
    buttonContainer:{
      height: hp('10%')
    }
  });
