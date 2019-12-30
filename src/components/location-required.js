import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles'
import CustomButton from "../components/customButton";

export default class LocationRequired extends Component {
    
    constructor(props) {
        super(props)
        // this.props = props
    }
    render() {
        let onButtonPress = this.props.onPress
        return (

            <View style={styles.container}>
                <Text>
                    This App needs Location Permission for showing weather data.
                </Text>
                <CustomButton
                    buttonText={'Give Location Permission'}
                    textStyle={{ color: 'white' }}
                    onPress={onButtonPress}
                />
            </View>

        );
    }

}
