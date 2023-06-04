import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../theme/appTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
    
    const {
        numero,
        numeroAnterior,
        handleClean,
        handleAssignSign,
        handleDelete,
        handleLaunchOperation,
        handleDigit,
        handleOperation
    } = useCalculator()

    return (
        <View style={ styles.calculatorContainer }>
            <Text style={ styles.resultFeedback }>{ numeroAnterior }</Text>
            <Text 
                style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ numero }</Text>
            { /*gris claro: A5A5A5*/ }
            { /*gris oscuro: 333333*/ }
            { /*naraja: FEA00A*/ }

            { /* FILA DE BOTONES */ }
            <View style={ styles.buttonsRow }>
                <CalculatorButton text='C' backgroundColor='#A5A5A5' color='black' onPress={ handleClean } />
                <CalculatorButton text='+/-' backgroundColor='#A5A5A5' color='black' onPress={ handleAssignSign } />
                <CalculatorButton text='del' backgroundColor='#A5A5A5' color='black' onPress={ handleDelete } />
                <CalculatorButton text='/' backgroundColor='#FEA00A' onPress={ () => handleOperation('/') } />
            </View>
            <View style={ styles.buttonsRow }>
                <CalculatorButton text='7' onPress={ handleDigit } />
                <CalculatorButton text='8' onPress={ handleDigit } />
                <CalculatorButton text='9' onPress={ handleDigit } />
                <CalculatorButton text='X' backgroundColor='#FEA00A' onPress={ () => handleOperation('*') } />
            </View>
            <View style={ styles.buttonsRow }>
                <CalculatorButton text='4' onPress={ handleDigit } />
                <CalculatorButton text='5' onPress={ handleDigit } />
                <CalculatorButton text='6' onPress={ handleDigit } />
                <CalculatorButton text='&minus;' backgroundColor='#FEA00A' onPress={ () => handleOperation('-') } />
            </View>
            <View style={ styles.buttonsRow }>
                <CalculatorButton text='1' onPress={ handleDigit } />
                <CalculatorButton text='2' onPress={ handleDigit } />
                <CalculatorButton text='3' onPress={ handleDigit } />
                <CalculatorButton text='+' backgroundColor='#FEA00A' onPress={ () => handleOperation('+') } />
            </View>
            <View style={ styles.buttonsRow }>
                <CalculatorButton text='0' incrementWithIn={ 2 } onPress={ handleDigit } />
                <CalculatorButton text='.' onPress={ handleDigit } />
                <CalculatorButton text='=' backgroundColor='#FEA00A' onPress={ () => handleLaunchOperation() } />
            </View>
        </View>
    )
}