// imports
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ITEM_HEIGHT } from '../components/CarouselCardItem';

export default function Tips({navigation}) {

    // Request tips to database
    const img_vector = require('../assets/mocki-logoV.png')

    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit.'
    const tipsdb = {
        "tips": [
            {
                "title":"Prepare for my interview",
                "body":"Always practice before going on an interview! Prepare a few past succeses and a little bit of your personality.",
                "image":"https://biginterview.com/wp-content/uploads/2011/08/Questions-to-ask-in-an-interview.png"
            },
            {
                "title":"Ask for input",
                "body":"When given a problem always remember to ask for some input, maybe the use cases, limitations and variables of the problem",
                "image":"https://www.fastweb.com/uploads/article_photo/photo/2035812/iStock-1177765368.jpg"
            },
            {
                "title":"Always communicate",
                "body":"Communication with your interviewer is very important, try to talk about your approach to the problem, how you are planning to solve it and possible failures.",
                "image":"http://5ines.com/blog/wp-content/uploads/2018/04/5ines-blog-posting-good-communication.jpg"
            },
            {
                "title":"Good impressions",
                "body":"Be courteous and allow the interview to end on time. restate your strengths and experiences, and mention a particular activity that fits the job.",
                "image":"https://smallbusinessify.com/wp-content/uploads/2019/01/Great-first-impressions-1024x751.jpg"
            },
            {
                "title":"Body language",
                "body":"Try to be polite and friendly, interviewers know you are nervous but try to look comfortable and confident",
                "image":"https://eslbrains.com/wp-content/uploads/2019/10/how-to-read-body-language-473x381.png"
            },
            {
                "title":"Previous Successes",
                "body":"Talk about your previous projects and successes, remember to outline exactly how you reached the solution and why you were indispensable",
                "image":"https://www.pngkit.com/png/detail/211-2115906_ipad-smart-work-icon-png.png"
            },
        ]
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
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Interview tips</Text>
            </View>
            <View style={styles.buttonsContainer}>

            { tipsdb.tips.map((item) => (
                <View>
                    <AppButton title={item.title}  onPress={() => navigation.navigate('Tip',{title: item.title , body: item.body, image: item.image})}/>
                </View>
            ))}
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