import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.caja1 }>
                <Text>Caja 1</Text>
            </View>
            <View style={ styles.caja2 }>
                <Text>Caja 2</Text>
            </View>
            <View style={ styles.caja3 }>
                <Text>Caja 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    caja1:{
        backgroundColor: 'yellow'
    },
    caja2:{
        backgroundColor: 'blue'
    },
    caja3:{
        backgroundColor: 'red'
    },
})