import React from 'react';
import { StyleSheet, Animated } from 'react-native';
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

    componentWillMount(){
        this.animColor = new Animated.Value(150);
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

                this.animColor.setValue(0)

                Animated.timing(this.animColor,{
                    toValue: 150,
                    duration: 2000
                }).start();
            }
    }

    render(){

        const interpolateColor = this.animColor.interpolate({
             inputRange: [0, 150],
             outputRange: ['rgb(255,0,0)', 'rgb(255,255,255)']
        })

        const animatedStyle = {
            backgroundColor: interpolateColor
        }

        let name = this.props.name
        let percentChange = this.props.percentChange
        let highestBid = this.props.highestBid
        let last = this.props.last

        return(
            <Card>
                <Animated.View style={[animatedStyle, styles.cell]}>
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
                </Animated.View>
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
    cell:{
        padding: 20
    }
});