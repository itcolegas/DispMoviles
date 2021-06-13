// imports
import React,  { useState } from 'react';
import { View,StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Radiobuttons
import RadioGroup from 'react-native-radio-buttons-group';

// Forms
import { useForm} from "react-hook-form";

export default function Quiz({navigation}) {

    // Request tips to database
    const img_vector = require('../assets/mocki-logoV.png')

    const {register, handleSubmit} = useForm();

    const radioButtonsData = [{
        id: '1', 
        label: '1 month',
        value: '1',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '2',
        label: '2 - 4 months',
        value: '2',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '3',
        label: '4 - 6 months',
        value: '4',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '4',
        label: '6 months',
        value: '6',
        color: 'white',
        labelStyle: styles.radioText
    }]


    const radioButtonsCompany = [{
        id: '1', 
        label: 'Google',
        value: '1',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '2',
        label: 'Facebook',
        value: '2',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '3',
        label: 'Microsoft',
        value: '4',
        color: 'white',
        labelStyle: styles.radioText
    }, {
        id: '4',
        label: 'Amazon',
        value: '6',
        color: 'white',
        labelStyle: styles.radioText
    }]

    const onSubmit= (data) => alert(JSON.stringify(data));
    
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [time, setTime] = useState("")
    const [radioButtonsC, setRadioButtonsC] = useState(radioButtonsCompany)
    const [company, setCompany] = useState("")

    function onPressRadioButton(radioButtonsArray) {
        radioButtonsArray.forEach(function (arrayItem) {
            if(arrayItem.selected == true){
                setTime(arrayItem.label)
            }
        });
        setRadioButtons(radioButtonsArray);
    }



    function onPressRadioButtonC(radioButtonsArray) {
        radioButtonsArray.forEach(function (arrayItem) {
            if(arrayItem.selected == true){
                setCompany(arrayItem.label)
            }
        });
        setRadioButtonsC(radioButtonsArray);
    }

    // Button
    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
    const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    );

      return (

        <View style={styles.menu}>
             <View style={styles.imageContainer}>
                <Image
                source={img_vector}
                style={{ width: 200, height: 50}}
                />
            </View>
            <Text style={styles.titleText}>Customize your profile!</Text>
            <Text style={styles.subtitleText}>When is your interview?</Text>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
            />
            <Text style={styles.subtitleText}>Select a prefered company</Text>
            <RadioGroup 
                radioButtons={radioButtonsC} 
                onPress={onPressRadioButtonC} 
            />

<AppButton title="Submit"  onPress={() => navigation.navigate('Menu',{time: time , company: company})}/>
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
    buttonsContainer:{
        alignItems: 'center',
        flex: 1,
        padding: 60,
        justifyContent: 'space-between'
    },
    appButtonContainer: {
        backgroundColor: "#F7F9F9",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 250
    },
      appButtonText: {
        fontSize: 18,
        color: "#7E8080",
        fontWeight: "bold",
        alignSelf: "center",
    },
    titleText:{
        paddingTop: 30,
        fontSize: 25,
        color: 'white'
    },
    subtitleText:{
        paddingTop: 15,
        fontSize: 20,
        color: 'white'
    },
    radioText:{
        fontSize: 18,
        paddingLeft: 30,
        color: 'white'
    }
  });