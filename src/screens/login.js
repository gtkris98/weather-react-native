import React from 'react';
import {View, Text} from 'react-native';
import CustomInput from '../components/customInputField';
import CustomButton from '../components/customButton';
import styles from '../assets/styles';
import Validations from '../utils/validations';
import ForgotPassword from './forgotPassword';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Authentication',
    headerStyle: styles.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    email: '',
    password: '',
    forgotPasswordModalVisible: false,
  };
  dismissModal = () => {
    this.setState({forgotPasswordModalVisible: false});
  };
  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.headingText}>LOGIN</Text>

        <CustomInput
          placeholder={'Email Address'}
          keyboardType={'email-address'}
          secureTextEntry={false}
          onChangeText={input => this.setState({email: input})}
          errorText={'Invalid Email Address'}
          validation={Validations.validateEmail}
        />

        <CustomInput
          placeholder={'Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={input => this.setState({email: input})}
          errorText={'Password must be at least 6 character long'}
          validation={Validations.validatePassword}
        />

        <CustomButton
          buttonText={'Login'}
          textStyle={{color: 'white'}}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        {this.state.forgotPasswordModalVisible ? (
          <ForgotPassword dismissModal={this.dismissModal} />
        ) : null}
        <CustomButton
          style={styles.secondaryButton}
          buttonText={'Register'}
          textStyle={{color: 'deepskyblue'}}
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Text
          style={{
            marginTop: 5,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            this.setState({forgotPasswordModalVisible: true});
          }}>
          Forgot Password? Tap Here
        </Text>
      </View>
    );
  }
}
