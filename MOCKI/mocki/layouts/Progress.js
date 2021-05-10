import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function Progress() {
    const onPress = () => console.log('Pressed');

    img_vector = require('../assets/mocki-logoV.png')
    

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
                <Text style={styles.titleText}>My progress</Text>
            </View>
            <View style={styles.graphContainer}>
                <LineChart
                    data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                    datasets: [
                        {
                        data: [
                            1,
                            2,
                            4,
                            4,
                            5,
                            7
                        ]
                        }
                    ]
                    }}
                    width={wp('90%')} // from react-native
                    height={hp('30%')}
                    
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        //backgroundColor: "#e26a00",
                        //backgroundGradientFrom: "#fb8c00",
                        //backgroundGradientTo: "#ffa726",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "green"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                </View>
                <View style={styles.graphContainer}>
                    <ProgressChart
                        data={{
                            //labels: ["Progress"],
                            data: [0.7]
                        }}
                        width={wp('60%')} // from react-native
                        height={hp('20%')}
                        
                        strokeWidth={8}
                        radius={40}
                        hideLegend={false}

                        chartConfig={{
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                    />
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