import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, ToastAndroid, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getForecastByLatLong } from '../utils/weather';
import { parseForecastJson } from "../utils/parse-forecast";


export default class ForecastWeather extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        forecastJson = this.props.forecastJson
        return (
            <ScrollView
                horizontal={true}
                style={styles.scrollView}
                showsHorizontalScrollIndicator={true}
            >
                {
                    forecastJson.map((forecastObj, i) => {
                        return (
                            <View style={styles.forecastView} key={i}>
                                <View style={{ flex: 1, alignSelf: 'center' }} ><Text style={styles.dayText}>{forecastObj["day"].split(' ')[0]}</Text></View>
                                <View style={{ flex: 1, alignSelf: 'center' }} ><Text style={styles.timeText}>{forecastObj["day"].split(' ')[1]} {forecastObj["day"].split(' ')[2]}</Text></View>
                                <View style={{ flex: 4, alignSelf: 'center' }} ><Image style={styles.iconView} source={{ uri: `http://openweathermap.org/img/wn/${forecastObj["icon"]}@2x.png` }} /></View>
                                <View style={{ flex: 1, alignSelf: 'center' }} ><Text style={styles.tempText}>{parseInt(forecastObj["temp"])}{String.fromCharCode(0x00B0)}C</Text></View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        margin: 10,
        backgroundColor: 'mintcream'
    },
    forecastView: {
        flexDirection: 'column',
        padding: 0,
        marginHorizontal: 10,
        marginVertical: 20,
        alignContent: "center"
    },
    dayText : {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
    timeText: {
        color: "darkgray",
        fontSize: 12
    },
    iconView : {
        width: 60, 
        height: 60,
    },
    tempText:{
        color: "black"
    }

})