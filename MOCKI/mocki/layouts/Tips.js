import React from 'react';
import { View, Text, StyleSheet, Button, Alert,TextInput, Dimensions } from 'react-native';

export default function Tips() {

    const [opc, setOpc] = React.useState("");

    return (
        <View style={styles.menu}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Interview tips</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <Button
                title="Prepare"
                onPress={() => Alert.alert(
                    'You chose the Prepare button')}
            />
             <Button
                title="Ask about the input"
                onPress={() => Alert.alert(
                    'You chose the Input button')}
            />
             <Button
                title="Always communicate"
                onPress={() => Alert.alert(
                    'You chose the Communicate button')}
            />
             <Button
                title="First impressions"
                onPress={() => Alert.alert(
                    'You chose the Impressions button')}
            />
             <Button
                title="Body language"
                onPress={() => Alert.alert(
                    'You chose the Body language button')}
            />
             <Button
                title="Previous Successes"
                onPress={() => Alert.alert(
                    'You chose the Successes button')}
            />
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
    titleContainer:{
        padding: 5
    },
    buttonsContainer:{
        padding: 80,
        alignItems: 'center'

    },
    button: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    titleText:{
        fontSize: 30
    }
  });