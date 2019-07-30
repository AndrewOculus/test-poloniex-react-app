import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text, Card, CardItem, Body } from 'native-base';
import CardCell  from '../components/CardCell';

export default class CardViewer extends React.Component {

  render(){
    let polonexData = this.props.polonexData
    
    let cards = Object.keys(polonexData).map(function(item, index){
        return(

            <CardCell key={index} 
            name={item} 
            percentChange={polonexData[item]['percentChange']}
            highestBid={polonexData[item]['highestBid']}
            last={polonexData[item]['last']}
            />
            /*
            <Card key={index}>
                <CardItem>
                    <Body>
                        <Text style={styles.name}>
                            Name: {item}
                        </Text>
                        <Text style={styles.params}>
                            Percent Change: {polonexData[item]['percentChange']}
                        </Text>
                        <Text style={styles.params}>
                            Highest Bid: {polonexData[item]['highestBid']}
                        </Text>
                        <Text style={styles.params}>
                            Last: {polonexData[item]['last']}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
            */
        );
    });

    return(
        <Content style={styles.card} >
            {cards}
        </Content>
    );
  }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 14
    },
    params:{
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)'
    },
});
  