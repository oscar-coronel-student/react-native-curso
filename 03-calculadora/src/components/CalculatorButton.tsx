import React from 'react'
import { Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string
    onPress: (caracterDigitado: string ) => void
    backgroundColor?: string
    color?: string
    incrementWithIn?: number
}

export const CalculatorButton = ({ text, onPress, backgroundColor = '#333333', color = 'white', incrementWithIn: applyWidth = 1 }: Props) => {
    const { width } = useWindowDimensions()
    const side = width * 0.19
    const widthFinal = applyWidth !== 1 ? (side * applyWidth) + (styles.button.marginHorizontal * applyWidth) : side
    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => onPress(text) }
            style={[styles.button, { width: widthFinal, height: side, backgroundColor: backgroundColor }]}
        >
            <Text style={[styles.buttonText, { color }]} >{ text }</Text>
        </TouchableOpacity>
    )
}
