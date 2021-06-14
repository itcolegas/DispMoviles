import React, { useState } from 'react'
import { View, ScrollView, Text, StyleSheet, Pressable, Modal, Linking } from 'react-native';

export default function Problem({ route, navigation }) {
    const {name, category, difficulty, description, hint, link} = route.params;
    const [ modalVisible, setModalVisible ] = useState(false);

    const firstUpperCase = (str) => {
        return(`${str[0].toUpperCase()}${str.slice(1)}`)
    }

    const loadInBrowser = () => {
        Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.header}>{firstUpperCase(category)} | <Text style={styles[difficulty]}>{firstUpperCase(difficulty)}</Text></Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView>
                    <Text style={styles.content}>
                        {"\n\n" + description + "\n\n"}
                    </Text>
                    
                    {hint
                    ? <>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>{hint}</Text>
                                    <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={styles.textStyle}>Close</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>Hint</Text>
                        </Pressable>
                        <Text>{"\n"}</Text>
                    </>
                    : null}
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={ loadInBrowser }
                    >
                        <Text style={styles.textStyle}>Try it on LeetCode!</Text>
                    </Pressable>
                </ScrollView>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#15c712",
    },
    buttonClose: {
        backgroundColor: "#15c712",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})