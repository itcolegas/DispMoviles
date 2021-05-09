import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Tip({route,navigation}) {

    const [opc, setOpc] = React.useState("");
    const [image, setImage] = useState(null);
    const { title } = route.params;

    img_vector = require('../assets/mocki-logoV.png')
  
      return (

        <View style={styles.menu}>
            <View style={styles.imageContainer}>
                <Image
                source={img_vector}
                style={{ width: 200, height: 50}}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.imageContainerLow}>
                <Image
                source={require('../assets/tipsimage.png')}
                style={{ width: 300, height: 300}}
                />
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
      imageContainerLow: {
        height: hp('50%'),
        justifyContent: 'center',
        alignItems: 'center'
      },
    titleContainer:{
        padding: 5
    },
    titleText:{
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    }
  });