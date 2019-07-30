import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container} />      
  );
}

HomeScreen.navigationOptions = {
  title: 'О приложении',
  headerTitleStyle: {
    color: 'white',
    alignSelf:'center',
    textAlign: 'center',
    flexGrow:1,
  },
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  onClose: () => { console.log('close')} ,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
