import React, { useState } from 'react'

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'


export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: {counter}
            </Text>


            <Fab 
                onPress={ () => { setCounter( counter => counter - 1 ) } } 
                text="-1" 
                position='left'
            />

            <Fab 
                onPress={ () => { setCounter( counter => counter + 1 ) } } 
                text="+1" 
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        top: -15
    }
})