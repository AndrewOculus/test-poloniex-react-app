import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

export default class CardCell extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            percentChange: this.props.percentChange,
            highestBid: this.props.highestBid,
            last: this.props.last,
        }
    }

    componentDidUpdate(){
        if( this.state.percentChange != this.props.percentChange ||
            this.state.highestBid != this.props.highestBid ||
            this.state.last != this.props.last){

                this.setState({
                    percentChange: this.props.percentChange,
                    highestBid: this.props.highestBid,
                    last: this.props.last,
                })

                console.log(this.props.name)
            }
    }

    render(){

        let name = this.props.name
        let percentChange = this.props.percentChange
        let highestBid = this.props.highestBid
        let last = this.props.last

        return(
            <Card>
                <CardItem>
                    <Body>
                        <Text style={styles.name}>
                            Name: {name}
                        </Text>
                        <Text style={styles.params}>
                            Percent Change: {percentChange}
                        </Text>
                        <Text style={styles.params}>
                            Highest Bid: {highestBid}
                        </Text>
                        <Text style={styles.params}>
                            Last: {last}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
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