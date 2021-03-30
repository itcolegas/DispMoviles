import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

export const Header = (props) => {
    return(
      <View style={styles.container}>
        {/*Este logo abre un menu que sale del lado izquierdo de la pantalla */}
        <Ionicons name="menu-outline" size={30} color="white"
          style={styles.icon}/>
        <Image 
          source={require('../assets/mocki-logoV.png')}
          style={styles.image}
        />
        {/*Este logo es un link a la vista de información de usuario */}
        <AntDesign name="user" size={30} color="white"
          style={styles.icon}/>
      </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    backgroundColor: 'black',  
  },
  icon:{
    padding: 10
  },
  image:{
    width: 150, 
    height:50,
    resizeMode: 'contain'
  },
});