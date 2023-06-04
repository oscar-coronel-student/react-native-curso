import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export const DimensionesScreen = () => {
    const { height, width } = useWindowDimensions()
    return (
        <View style={ styles.main }>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.2
                }}>
                </View>
                <View style={styles.cajaNaranja}>
                </View>
            </View>
            <Text style={ styles.title }>W: { width }, H: { height }</Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        height: 200,
        backgroundColor: 'brown'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title:{
        fontSize: 18,
        textAlign: 'center'
    }
})