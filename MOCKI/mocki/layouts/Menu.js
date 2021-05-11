import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

import CardsCarousel from '../components/CardsCarousel';

export default function Menu({navigation}) {
    const [username, setUserName] = useState('Ruben');
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