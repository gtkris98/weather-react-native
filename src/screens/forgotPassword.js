import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import CustomInput from '../components/customInputField';
import CustomButton from '../components/customButton';
import styles from '../assets/styles';
import Validations from '../utils/validations'

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
            email: ''
        }
    }
    ShowModalFunction(visible) {

        this.setState({ modalVisible: visible });
        this.props.dismissModal();
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => { this.ShowModalFunction(!this.state.modalVisible) }} >
                <View style={styles.dialogContainer}>
                    <View style={styles.modalInsideView}>
                        <Text
                            style={{ fontFamily: "sf-ui-display-thin", letterSpacing: 3, fontSize: 30 }}
                        >Forgot Password</Text>
                        <CustomInput
                            placeholder={"Email Address"}
                            keyboardType={"email-address"}
                            secureTextEntry={false}
                            onChangeText={input => this.setState({ email: input })}
                            errorText={"Invalid Email Address"}
                            validation={Validations.validateEmail}
                        />
                        <CustomButton
                            buttonText={"Reset Password"}
                            textStyle={{ color: "white" }}
                        />
                        <CustomButton
                            style={styles.secondaryButton}
                            buttonText={"Go Back"}
                            textStyle={{ color: "deepskyblue" }}
                            onPress={() => { this.ShowModalFunction(!this.state.modalVisible) }}
                        />
                    </View>
                </View>
            </Modal>

        );
    }
}