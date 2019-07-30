import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import CardViewer from '../components/CardViewer';

export default class TradeScreen extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      polonexData: null,
      polonexDataError: null
    };

    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        clearInterval(this.interval);
        this.setState({ 
          polonexData: null,
          polonexDataError: null
         });
      }
    );

    const willBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.make_sheduler()
        this.interval = setInterval(() => 
         this.make_sheduler() , 5000
        );   
      }
    );

  }

  make_sheduler(){
    console.log('update')

    const API_URL = "https://poloniex.com/public?command=returnTicker"

    fetch(API_URL).then(res => res.json()).then(json => {
      this.setState({ polonexData: json });
      }).catch((error) => {
      console.log(error);
      this.setState({ 
        polonexData: null,
        polonexDataError: error
       });
    })
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    console.log('will unmount')
    didBlurSubscription.remove();
    willBlurSubscription.remove();
    clearInterval(this.interval);
  }


  
  render(){

    const polonexData = this.state.polonexData;
    const polonexDataError = this.state.polonexDataError;

    if(polonexData == null){
      if(polonexDataError == null){

        let spinValue = new Animated.Value(0)

        Animated.timing(
          spinValue,
          {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        ).start()
        
        const spin = spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '720deg']
        })

        return (
          <View style={styles.loading_container}>
            <Text style={styles.loading_text}>
              Загрузка...
            </Text>
            
            <Animated.Image
              style={{transform: [{rotate: spin}], width: 110, height: 110 }}
              source={require('../assets/images/spinner.png')} >  
            </Animated.Image>

          </View>
        );
      }else{
        return (
          <View style={styles.loading_container}>
            <Text style={styles.loading_text}>
              Ошибка:
            </Text>
            <Text style={styles.loading_text}>
              {polonexDataError}
            </Text>
          </View>
        );
      }
    }else{
      return (
        <CardViewer polonexData = {polonexData} />
      );
    }
  }
}

TradeScreen.navigationOptions = {
  title: 'Котировки',
  headerTitleStyle: {
    color: 'white',
    alignSelf:'center',
    textAlign: 'center',
    flexGrow:1,
  },
  headerStyle: {
    backgroundColor: '#f4511e',
  },
};

const styles = StyleSheet.create({
  loading_container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  loading_text:{
    fontSize: 40,
    color: 'black',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#d966ff',
  },
});
