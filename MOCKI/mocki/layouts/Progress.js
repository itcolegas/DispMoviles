import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Progress() {

    const [opc, setOpc] = React.useState("");
    const [image, setImage] = useState(null);

    img_vector = require('../assets/mocki-logoV.png')
    

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

                <AppButton title="Prepare for my interview"  onPress={() => Alert.alert('You chose the Prepare button')}/>
                
                <AppButton title="Ask about the input"  onPress={() => Alert.alert('You chose the Input button')}/>
                
                <AppButton title="Always communicate"  onPress={() => Alert.alert('You chose the Communicate button')}/>
                
                <AppButton title="First impressions"  onPress={() => Alert.alert('First impressions')}/>

                <AppButton title="Body language"  onPress={() => Alert.alert('You chose the Body language button')}/>

                <AppButton title="Previous Successes"  onPress={() => Alert.alert('You chose the Successes button')}/>
                
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