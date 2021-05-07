import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

//Basado en https://blog.logrocket.com/creating-custom-buttons-in-react-native/
const CustomButton = ({ icon, onPress, title, backgroundColor, paddingVertical, marginBottom}) => {
  return(
    <TouchableOpacity
     onPress={onPress}
     style={[
       styles.ButtonContainer,
       backgroundColor={backgroundColor},
       paddingVertical={paddingVertical},
       marginBottom={marginBottom}
     ]}
   >
     <View style={styles.FontContainer}>
      {icon ? <FontAwesome style={styles.icon} name={icon} size={16} color="white" /> : null}
      <Text style={styles.ButtonText}>{title}</Text>
     </View>
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  FontContainer:{
    flexDirection: 'row',
    alignSelf: "center",
  },
  ButtonContainer:{
    borderRadius:10,
  },
  ButtonText: {
    fontSize: 15,
    paddingLeft: 10,
    color: 'white',
    alignSelf: 'center',
  },
  icon:{
    fontSize:20,
  },
})

export default CustomButton;
