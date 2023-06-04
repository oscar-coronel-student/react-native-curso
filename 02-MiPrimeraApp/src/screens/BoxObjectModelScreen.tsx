import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.constainer }>
            <Text style={ styles.title } >Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        marginTop: 50,
        marginHorizontal: 40,
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontSize: 20,
        borderWidth: 10
    }
})