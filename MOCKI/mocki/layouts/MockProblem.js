import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MockProbelm({data}) {
    const {name, category, difficulty, description, hint} = data;

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
                    {description}
                </Text>
                {hint
                ?<Button title='Hint' onPress={() => alert(hint)}/>
                :null
                }
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