import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Problem({ route, navigation }) {
    const {name, category, difficulty} = route.params;
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper metus elementum sem consectetur, at aliquet enim condimentum. Nullam quam dolor, semper a sapien in, dignissim laoreet odio. Phasellus suscipit, nisi at scelerisque dignissim, massa dui iaculis mauris, id scelerisque felis ipsum a ligula.\n\nNullam lectus arcu, blandit ac ultricies in, interdum et turpis. Donec velit nibh, pulvinar non facilisis in, interdum non elit. Pellentesque facilisis, ante eget dictum bibendum, tortor massa accumsan felis, et sollicitudin justo massa eget massa. Aenean euismod arcu maximus leo feugiat facilisis. Nulla sit amet metus volutpat, convallis tortor a, efficitur nisl. Donec aliquam non leo eget consectetur';
    const hint = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper metus elementum sem consectetur, at aliquet enim condimentum. Nullam quam dolor, semper a sapien in, dignissim laoreet odio.';

    const firstUpperCase = (str) => {
        return(`${str[0].toUpperCase()}${str.slice(1)}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.header}>{category} | <Text style={styles[difficulty]}>{firstUpperCase(difficulty)}</Text></Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>
                    {content}
                </Text>
                <Button title='Hint' onPress={() => alert(hint)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        overflow: 'scroll'
    },
    headerContainer: {
        width: '100%',
        padding: 10,
        borderWidth: 3,
        borderColor: 'black'
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    },
    contentContainer: {
        padding: 10
    },
    content: {
        fontSize: 16
    },
    easy: {
        color: '#8DD98C'
    },
    medium: {
        color: '#F7B801'
    },
    hard: {
        color: '#A30000'
    },
})