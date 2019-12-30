import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../assets/styles';
import { requestLocationPermission, getUserLocation } from '../utils/location';
import Loading from './loading';
import Geolocation from 'react-native-geolocation-service';
import CustomButton from '../components/customButton';
import { getCurrentWeatherByLatLong, getCurrentWeatherByCityId } from '../utils/weather';
import LocationRequired from "../components/location-required";
import ErrorScreen from '../components/error-screen';
import CurrentWeather from '../components/current-weather';

export default class Dashboard extends React.Component {
  state = {
    position: 0,
    locationPermission: true,
    errorEncountered: false,
    loadingData: true,
    weatherData: null
  };
  componentDidMount() {
    let cityId = this.props.navigation.getParam('cityId', null)
    console.log("cityId",cityId);
    console.log("this.setState.errorEncountered",this.setState.errorEncountered)
    if (cityId == null) {
      this.getLocation();
    }
    else{
      this.getCurrentWeatherByCity(cityId)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loadingData ?
          (
            <Loading />
          ) : !this.state.locationPermission ?
            (
              <LocationRequired
                onPress={() => this.getLocation()}
              />
            ) :
            this.state.errorEncountered ?
              (
                <ErrorScreen
                  errorText="No Internet Access"
                  onPress={() => this.getLocation()}
                />
              ) :
              (
                <CurrentWeather
                  weatherData={this.state.weatherData}
                  navigation = {this.props.navigation}
                />
              )}
      </View>
    );
  }

  getLocation() {
    this.setState({ statusText: null });
    requestLocationPermission().then(isPermissionGranted => {
      if (isPermissionGranted) {
        Geolocation.getCurrentPosition(
          position => {
            this.setState({ position: position, loadingData: true, locationPermission: true, errorEncountered: false });
            this.getCurrentWeather(position);
          },
          error => {
            this.setState({ errorEncountered: true, loadingData: false })
            alert(error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        this.setState({ locationPermission: false, loadingData: false });
      }
    });
  }

  getCurrentWeather(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getCurrentWeatherByLatLong(latitude, longitude)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.cod == 200) {
          this.setState({ loadingData: false, weatherData: responseJson, errorEncountered: false })
        }
        else {
          this.setState({ loadingData: false, errorEncountered: true })
        }
      })
      .catch(err => {
        this.setState({ loadingData: false, errorEncountered: true })
      });
  }

  getCurrentWeatherByCity(cityId) {

    getCurrentWeatherByCityId(cityId)
      .then(response => response.json())
      .then(responseJson => {
        console.log("response", responseJson);
        
        if (responseJson.cod == 200) {
          this.setState({ loadingData: false, weatherData: responseJson, errorEncountered: false })
        }
        else {
          this.setState({ loadingData: false, errorEncountered: true })
        }
      })
      .catch(err => {
        this.setState({ loadingData: false, errorEncountered: true })
      });
  }
}
