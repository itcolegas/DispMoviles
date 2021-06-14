import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LineGraph from '../components/LineGraph';
import ProgressGraph from '../components/ProgressGraph';

export default function Progress() {

    const d =new Date();
    const onPress = () => alert(d.getMonth()+1);

    const img_vector = require('../assets/mocki-logoV.png');

    //Chart data
    const lineData = [0,0,0,0,0,7];
    const progressData = [0.7];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
    

    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

      return (

        <View style={styles.menu}>
            {/*Logo*/}
            <View style={styles.imageContainer}>
                <Image
                source={img_vector}
                style={{ width: 200, height: 50}}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>My progress</Text>
            </View>
            {/*Line graph*/}
            <View style={styles.graphContainer}>
                <LineGraph labels={["Jan", "Feb", "Mar", "Apr", "May", "June"]}
                    data={lineData}/>
            </View>
            {/*Progress graph*/}
            <View style={styles.graphContainer}>
                <ProgressGraph data={progressData} hideLegend={false}/>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>SEND BY MAIL</Text>
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
        height: hp('8%'),
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