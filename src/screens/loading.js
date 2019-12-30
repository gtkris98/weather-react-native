import React from 'react';
import {View} from 'react-native';
import styles from '../assets/styles';
import LoadingAnimation from '../components/lodingAnimation';

export default class Loading extends React.Component {
  // componentDidMount(){

  //     this._interval = setInterval(() => {
  //         this.props.navigation.navigate('Login')
  //       }, 2000);
  // }
  // componentWillUnmount() {
  //     clearInterval(this._interval);
  //   }
  render() {
    return (
      <View style={styles.container}>
        <LoadingAnimation />
      </View>
    );
  }
}
