import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF506B',
  },
};

export default styles = StyleSheet.create({
  container_main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#E6E6E6",
  },

  container_result: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container_keyboard: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },

  button_param: {
    flex:1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 16,
    backgroundColor: "white",
    width: '100%',

   

  },
  button_param2:{
    flex:2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 16,
    backgroundColor: "white",
    width: '100%',

  },
/*   buttonText_param: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  }, */
  button_operation: {
    flex:1,
    backgroundColor: AppTheme.colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 16,
    backgroundColor: "#DBDBDB",
    width: '100%',

  },
/*   buttonText_operation: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange'
  }, */
  button_cal: {
    flex:1,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 16,

  },
  buttonText_default: {
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  buttonText_operate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  }, 
  buttonText_cal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }, 
  resultText:{
    fontSize: 50
  }
});