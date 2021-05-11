import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Tips({navigation}) {

    const [opc, setOpc] = React.useState("");
    const [image, setImage] = useState(null);

    const img_vector = require('../assets/mocki-logoV.png')

    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit.'
    

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
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Interview tips</Text>
            </View>
            <View style={styles.buttonsContainer}>

                <AppButton title="Prepare for my interview"  onPress={() => navigation.navigate('Tip',{title: 'Prepare for my interview', body: body})}/>
                
                <AppButton title="Ask about the input"  onPress={() => navigation.navigate('Tip',{title: 'Ask about the input', body: body})}/>
                
                <AppButton title="Always communicate"  onPress={() => navigation.navigate('Tip',{title: 'Always communicate', body: body})}/>
                
                <AppButton title="First impressions"  onPress={() => navigation.navigate('Tip',{title: 'First impressions', body: body})}/>

                <AppButton title="Body language"  onPress={() => navigation.navigate('Tip',{title: 'Body language', body: body})}/>

                <AppButton title="Previous Successes"  onPress={() => navigation.navigate('Tip',{title: 'Previous Successes', body: body})}/>
                
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2A2C2C',
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
        padding: 5
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
        paddingTop: 40,
        fontSize: 30,
        color: 'white'
    }
  });