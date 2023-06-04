import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';


export const Pagina2Screen = () => {
    console.log('render page 2')
    const navigation: NavigationProp<any> = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: 'Página 2',
            headerBackTitle: 'Atras'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 2 Screen</Text>
            <Button
                title='Ir a la página 3'
                onPress={ () => navigation.navigate('Pagina3Screen') }
            />
        </View>
    )
}