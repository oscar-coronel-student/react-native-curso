import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { styles, colors } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


interface Props extends StackScreenProps<any, any> {}

export const Tab1Screen = ({}: Props) => {
    console.log('tab page 1')
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Tab 1 Screen</Text>
            <Text>
                <TouchableIcon name='fighter-jet' />
                <TouchableIcon name='youtube' />
                <TouchableIcon name='uncharted' />
                <TouchableIcon name='telegram' />
                <TouchableIcon name='sticker-mule' />
                <TouchableIcon name='react' />
            </Text>
        </View>
    )
}