import { StyleSheet } from 'react-native';

//para responsividad
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  viewContainer: {
    backgroundColor: 'black',
  },
  imageContainer: {
    height: hp('55%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
    height: hp('20%'),
    marginLeft: 15,
    marginRight: 15,
  },
  formContainer:{
    paddingLeft: 15,
    paddingRight: 20,
    height: hp('10%'),
  },
  buttonContainer:{
    height: hp('10%'),
    paddingRight: 15,
    paddingLeft: 15,
  },
  title:{
    color: 'white',
    fontSize: hp('4%'),
    fontFamily: 'AvenirNext-Bold',
    marginBottom:10,
  },
  subtitle:{
    color: 'white',
    fontSize: hp('2%'),
    fontFamily: 'AvenirNext-DemiBold',
  },
  controller:{
    paddingLeft: 20,
  },
  error:{
    fontSize: 16,
    color: '#d95d5d',
    fontFamily: 'HelveticaNeue',
    paddingLeft: 18,
    paddingRight: 18,
  }
});
