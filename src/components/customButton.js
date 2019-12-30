import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../assets/styles'

export default class CustomButton extends Component {
    state = {
        text: ""
    }
    constructor(props) {
        super(props)
        // this.props = props
    }
    render() {
        let buttonText = this.props.buttonText
        let ButtonBg = this.props.style
        let buttonTextStyle = this.props.textStyle
        let onButtonPress = this.props.onPress
        return (
            <TouchableOpacity
                style={(ButtonBg == null || ButtonBg == undefined) ? styles.button : ButtonBg}
                onPress={() => onButtonPress()}
            >
                <Text
                    style={(buttonTextStyle == null || buttonTextStyle == undefined) ? styles.buttonText : buttonTextStyle}
                > {buttonText} </Text>

            
            </TouchableOpacity>
        );
    }
    
}
