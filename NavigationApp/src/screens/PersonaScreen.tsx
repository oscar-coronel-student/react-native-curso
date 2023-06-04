import React, { useContext, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'

import { styles } from '../theme/appTheme'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ navigation, route }: Props) => {
    console.log('render pagina screen')
    const params = route.params
    const { name } = params

    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
        changeUsername(name)
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                { JSON.stringify( params, null, 2 ) }
            </Text>
        </View>
    )
}