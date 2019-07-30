import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text, Card, CardItem, Body } from 'native-base';
import CardCell  from '../components/CardCell';

export default class CardViewer extends React.Component {

  render(){
    let polonexData = this.props.polonexData
    
    let cards = Object.keys(polonexData).map(function(item, index){
        return(

            <CardCell
            key={index} 
            name={item} 
            percentChange={polonexData[item]['percentChange']}
            highestBid={polonexData[item]['highestBid']}
            last={polonexData[item]['last']}
            />
        );
    });

    return(
        <Content>
            {cards}
        </Content>
    );
  }
}
