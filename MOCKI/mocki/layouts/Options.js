import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//firebase
import firebase from '../utils/Firebase';
import 'firebase/auth';

export default function Options({navigation}) {
    const img_vector = require('../assets/mocki-logoV.png');

    function signOut(){
      firebase.auth().signOut()
      .then(() => console.log('User signed out!'));
    }


    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

      return (

        <View style={styles.menu}>
            <View style={styles.imageContainer}>
                <Image
                source={img_vector}
                style={{ width: 200, height: 50}}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Options</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => signOut()} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 20,
        overflow: 'scroll'
    },
    imageContainer: {
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center'
      },
    titleContainer:{
        paddingBottom: 20
    },
    buttonContainer:{
        paddingBottom: 20
    },
    graphContainer:{
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonsContainer:{
        alignItems: 'center',
        flex: 1,
        padding: 60,
        justifyContent: 'space-between'
    },
    titleText:{
        paddingTop: 40,
        fontSize: 30,
        color: 'white'
    },
    appButtonContainer: {
        backgroundColor: "#08DD16",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 250
    },
    appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    },
  });
