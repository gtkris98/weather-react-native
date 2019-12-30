import React, { Component } from 'react'
import { Animated, Easing, Image, View } from 'react-native'
import { styles } from '../assets/styles';

export default class LoadingAnimation extends Component {
    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin();
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render() {

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View>
                <Animated.Image
                    style={{
                        width: 100,
                        height: 100,
                        transform: [{ rotate: spin }],
                    }}
                    source={require("../assets/images/animation-logo.png")}
                />
            </View>
        )
    }
}
