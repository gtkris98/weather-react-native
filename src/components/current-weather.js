import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, ToastAndroid } from 'react-native';
import styles from '../assets/styles'
import { ScrollView } from 'react-native-gesture-handler';
import { getForecastByLatLong, getForecastByCityId } from '../utils/weather';
import { parseForecastJson } from "../utils/parse-forecast";
import ForecastWeather from './forecast-weather';
import CustomInput from '../components/customInputField';
import  citySearch  from "../utils/city-search";

export default class CurrentWeather extends React.Component {

    state = {
        forecastJson: null,
        searchString: null,
        searchResults: null,
        cityList: null,
    };
    constructor(props) {
        super(props)
        this.getForecastData();
        // this.props = props
    }
    componentDidMount(){
        this.getCitiesListWithIds()
    }
    render() {
        let weatherJson = this.props.weatherData
        let areaName = weatherJson["name"]
        let temperatureText = weatherJson["main"]["temp"]
        let weatherDescriptionText = weatherJson["weather"][0]["description"].toUpperCase();
        let minTemperatureText = weatherJson["main"]["temp_min"]
        let maxTemperatureText = weatherJson["main"]["temp_max"]
        let feelsLikeTemperatureText = weatherJson["main"]["feels_like"]
        let weatherIcon = weatherJson["weather"][0]["icon"]
        let weatherIconUri = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center", height: "5%", width: "100%" }}>
                    <CustomInput
                        placeholder={'Search City...'}
                        secureTextEntry={false}
                        keyboardType={'default'}
                        onChangeText={input => this.getSearchResults(input)}
                    />
                    {
                        this.state.searchResults == null ? null : (
                            this.state.searchResults.map((city, i) => {
                                return (
                                    <View key={city["id"]} style={{zIndex:1, width: "100%", backgroundColor: "white", paddingHorizontal: 20, paddingTop: 20,}}>
                                        <Text 
                                        style={{borderBottomColor: 'deepskyblue', borderBottomWidth: 1, fontSize: 20, padding: 5}} 
                                        onPress={() =>  this.props.navigation.push('Dashboard',{cityId: city.id})}>
                                        {city["name"]}
                                        </Text>
                                    </View>
                                )
                            })
                        )
                    }
                </View>
                <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.temperatureText}>{areaName}</Text>
                    <Text style={styles.weatherDescriptionText}>{weatherDescriptionText}</Text>
                    <Image style={{ width: 100, height: 100, tintColor: 'deepskyblue', resizeMode: 'stretch', padding: 0 }} source={{ uri: weatherIconUri }} />
                    <Text style={styles.temperatureText}>{parseFloat(temperatureText).toFixed(1)}{String.fromCharCode(0x00B0)}C</Text>
                    <Text style={styles.feelsLikeTemperatureText}>Feels Like: {parseFloat(feelsLikeTemperatureText).toFixed(1)}{String.fromCharCode(0x00B0)}C</Text>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Text style={styles.minTemperatureText}>Min:{"\n"}{parseFloat(minTemperatureText).toFixed(1)}{String.fromCharCode(0x00B0)}C</Text>
                        <View style={{ borderRightColor: 'deepskyblue', borderRightWidth: 1, marginHorizontal: 8 }} />
                        <Text style={styles.maxTemperatureText}>Max:{"\n"}{parseFloat(maxTemperatureText).toFixed(1)}{String.fromCharCode(0x00B0)}C</Text>
                    </View>
                </View>
                <View style={{ flex: 4 }}>
                    {
                        this.state.forecastJson != null ? (<ForecastWeather forecastJson={this.state.forecastJson} />) : null
                    }
                </View>
            </View>
        );
    }

    getForecastData() {
        let cityId = this.props.weatherData["id"];

        getForecastByCityId(cityId)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.cod == 200) {
                    this.setState({ forecastJson: parseForecastJson(responseJson) })
                }
                else {
                    alert('Unexpected Error Occurred')
                }
            })
            .catch(err => {
                console.log(err);

                ToastAndroid.show('Unable to fetch Data' + err.message, ToastAndroid.LONG);
            });
    }
    getSearchResults(searchString){

        if (searchString == '') {
            this.setState({searchResults: null})
        }
        else{
            let searchResults = this.state.cityList.filter(city => {
                return city['name'].toLowerCase().startsWith(searchString)
            })
            this.setState({searchResults: searchResults.splice(0,5)})
        }
        
    }
    async getCitiesListWithIds() {

        await citySearch('').then(response => {
            //console.log(response);
            
            this.setState({cityList : response})
        })
    }

    navigateToDashboard = () => {
        this.props.navigation.push('Dashboard',{cityId: city.id})
    }

}
