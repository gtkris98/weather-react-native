import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles'
import CustomButton from "../components/customButton";

export default class ErrorScreen extends Component {

    constructor(props) {
        super(props)
        // this.props = props
    }
    render() {
        let onButtonPress = this.props.onPress
        let errorText = this.props.errorText
        return (

            <View style={styles.container}>
                <Text>
                    {errorText}
                </Text>
                <CustomButton
                    buttonText={'Retry'}
                    textStyle={{ color: 'white' }}
                    onPress={onButtonPress}
                />
            </View>

        );
    }

}
