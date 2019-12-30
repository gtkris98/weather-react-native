import React, { Component } from 'react';
import { Text, TextInput, View, ShadowPropTypesIOS } from 'react-native';
import styles from '../assets/styles'

let onSubmit
export default class CustomInput extends Component {
    state = {
        text: "",
        showError: false
    }
    constructor(props) {
        super(props)
        onSubmit = this.props.onButtonSubmit
        // this.props = props
    }
    onChangeText = (input) => {
        this.setState({ text: input })
        this.props.onChangeText(input);
        if (this.props.validation != null && this.props.validation != undefined) {
            this.props.validation(input) ? this.setState({showError: false}) : this.setState({showError: true})
        }
    }

    render() {
        let placeholder = this.props.placeholder
        let keyboardType = this.props.keyboardType
        let secureText = this.props.secureTextEntry
        let errorText = this.props.errorText
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    secureTextEntry={secureText}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    onChangeText={input => this.onChangeText(input)}
                    value={this.state.text}
                    keyboardType={keyboardType}
                    clearButtonMode={"always"}
                />
                {this.state.showError ?
                    <Text
                        style={styles.errorText}
                    >
                        {errorText}
                    </Text> : null
                }

            </View>

        );
    }

};
