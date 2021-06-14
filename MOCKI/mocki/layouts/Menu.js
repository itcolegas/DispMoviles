import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

import CardsCarousel from '../components/CardsCarousel';

//firebase
import firebase from '../utils/Firebase';
import 'firebase/auth';

export default function Menu({navigation}) {
    let user = firebase.auth().currentUser;
    const [username, setUsername] = useState(user.displayName);

    function getUserData(){
     const timeout = setTimeout(() => {
       user = firebase.auth().currentUser;
       setUsername(user.displayName);
     }, 250);
    }

     useEffect(() =>{
       getUserData();
     },[user, username])

    return (
        <View style={styles.menu}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Hi {username}!</Text>
            </View>
            <View style={styles.carouselContainer}>
                <Text style={styles.carouselText}>Your Favorites</Text>
                <CardsCarousel/>
            </View>
            <View style={styles.carouselContainer}>
                <Text style={styles.carouselText}>Content</Text>
                <Button title="Interview tips"  onPress={() => navigation.navigate('Tips')}/>
                <Button title="Progress"  onPress={() => navigation.navigate('Progress')}/>
                <Button title="Mock Interview"  onPress={() => navigation.navigate('MockInterview')}/>
                <Button title="Problems"  onPress={() => navigation.navigate('Problems')}/>
                <Button title="Quiz"  onPress={() => navigation.navigate('Quiz')}/>
                <CardsCarousel/>
            </View>
            <View style={styles.carouselContainer}>
                <Text style={styles.carouselText}>Problems By Company</Text>
                <CardsCarousel/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        overflow: 'scroll'
    },
    carouselContainer:{
        padding: 5,
    },
    carouselText:{
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    welcomeContainer:{
        padding: 5
    },
    welcomeText:{
        fontSize: 22
    }
  });
