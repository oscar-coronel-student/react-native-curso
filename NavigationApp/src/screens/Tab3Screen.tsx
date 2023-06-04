import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {}

export const Tab3Screen = ({}: Props) => {
    console.log('tab page 3')
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Tab 3 Screen</Text>
        </View>
    )
}