import React, {useState} from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Pressable, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

//firebase
import firebase from '../utils/Firebase';
import 'firebase/auth';

export default function Menu({navigation}) {
    const user = firebase.auth().currentUser;
    const [username, setUserName] = useState(user.displayName);
    return (
        <View style={styles.menu}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Hi {username}!</Text>
            </View>
            <View style={styles.carouselContainer}>
                <Text style={styles.carouselText}>Content</Text>
                <View style={styles.contentContainer}>
                        <Pressable style={styles.menuButton} onPress={() => navigation.navigate('Tips')}>
                            <Text style={styles.contentText}>Interview tips</Text>
                            <Icon
                                name = 'bulb-outline'
                                type = 'ionicon'
                                size = "70"
                                color = "#15c712"
                            />
                        </Pressable>
                        <Pressable style={styles.menuButton} onPress={() => navigation.navigate('Progress')}>
                            <Text style={styles.contentText}>Progress</Text>
                            <Icon
                                name = 'analytics-outline'
                                type = 'ionicon'
                                size = "70"
                                color = "#15c712"
                            />
                        </Pressable>
                        <Pressable style={styles.menuButton} onPress={() => navigation.navigate('MockInterview')}>
                            <Text style={styles.contentText}>Mock Interview</Text>
                            <Icon
                                name = 'hourglass-outline'
                                type = 'ionicon'
                                size = "70"
                                color = "#15c712"
                            />
                        </Pressable>
                        <Pressable style={styles.menuButton} onPress={() => navigation.navigate('Problems')}>
                            <Text style={styles.contentText}>Problems</Text>
                            <Icon
                                name = 'barbell-outline'
                                type = 'ionicon'
                                size = "70"
                                color = "#15c712"
                            />
                        </Pressable>
                        <Pressable style={styles.menuButton} onPress={() => navigation.navigate('Quiz')}>
                            <Text style={styles.contentText}>Quiz</Text>
                            <Icon
                                name = 'construct-outline'
                                type = 'ionicon'
                                size = "70"
                                color = "#15c712"
                            />
                        </Pressable>
                </View>
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
    },
    carouselContainer:{
        alignItems: 'flex-start',
        width: '100%',
        padding: 5,
    },
    carouselText:{
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentText:{
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    welcomeContainer:{
        padding: 5
    },
    welcomeText:{
        fontSize: 22
    },
    menuButton: {
        width: 150,
        height: 150,
        margin: 10,
        padding: 5,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 10
    }
  });
