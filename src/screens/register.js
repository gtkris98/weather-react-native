import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CustomInput from '../components/customInputField'
import CustomButton from '../components/customButton'
import styles from '../assets/styles'
import Validations from '../utils/validations'


export default class Register extends React.Component {
    static navigationOptions = {
        title: 'Authentication',
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    render() {
        return (
            <View style={styles.form}>

                <Text style={styles.headingText}>
                    Register
                </Text>

                <CustomInput
                    placeholder={"Name"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onChangeText={input => this.setState({name: input})}
                    errorText={"Name can be 6 to 20 charcater long"}
                    validation={Validations.validateName}
                />

                <CustomInput
                    placeholder={"Email Address"}
                    keyboardType={"email-address"}
                    secureTextEntry={false}
                    onChangeText={input => this.setState({email: input})}
                    errorText={"Invalid Email Address"}
                    validation={Validations.validateEmail}

                />
                <CustomInput
                    placeholder={"Password"}
                    keyboardType={"default"}
                    secureTextEntry={true}
                    onChangeText={input => this.setState({password: input})}
                    errorText={"Password must be atleast 6 characters long"}
                    validation={Validations.validatePassword}
                />

                <CustomInput
                    placeholder={"Confirm Password"}
                    keyboardType={"default"}
                    secureTextEntry={true}
                    onChangeText={input => this.setState({confirmPassword: input})}
                    errorText={"Password must be atleast 6 characters long"}
                    validation={Validations.validatePassword}
                />
                <CustomButton
                    buttonText={"Register"}
                    textStyle={{ color: "white" }}
                />
                <Text
                    style={{
                        marginTop: 5,
                        textDecorationLine: "underline"
                    }}
                    onPress={
                        () => this.props.navigation.navigate('Login')
                    }
                >
                    Alreay Registered? Tap Here
                </Text>
            </View>
        )
    }
}