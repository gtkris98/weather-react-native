import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../assets/styles";

export default class WeatherDeatils extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Weather Details Screen
                </Text>
            </View>
        )
    }
}