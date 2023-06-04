import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {}

export const Tab2Screen = ({}: Props) => {
    console.log('tab page 2')
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Tab 2 Screen</Text>
        </View>
    )
}