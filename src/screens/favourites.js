import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "../assets/styles";

export default class Favourites extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Favorites Screen
                </Text>
                <Button
                title={"Go To Details"}
                onPress={() => this.props.navigation.navigate('WeatherDeatils')}
                >

                </Button>
            </View>
        )
    }
}