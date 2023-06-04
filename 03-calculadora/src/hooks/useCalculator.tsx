import React, { useRef, useState } from 'react'

type Operations = '+'|'-'|'*'|'/'|undefined

export const useCalculator = () => {
    const initNumberState: string = ''
    const [numero, setNumero] = useState(initNumberState)
    const [numeroAnterior, setNumeroAnterior] = useState(initNumberState)
    const operationRef = useRef<Operations>()

    const handleClean = () => {
        setNumero(initNumberState)
        setNumeroAnterior(initNumberState)
        operationRef.current = undefined
    }

    const handleDigit = (caracterDigitado: string) => {
        const validCeroInit = (numero === '-0' || numero === '0')
        const numberSign = numero.startsWith('-') ? '-' : ''
        if(
            (validCeroInit && caracterDigitado === '0') || // No aceptar varios ceros al principio
            (numero.includes('.') && caracterDigitado === '.') // No aceptar doble punto
        ) return 
        if( validCeroInit && caracterDigitado !== '0' && caracterDigitado !== '.') return setNumero(`${ numberSign }${ caracterDigitado }`)
        setNumero(`${ numero }${ caracterDigitado }`)
    }

    const handleAssignSign = () => {
        numero.startsWith('-') 
            ? setNumero(`${ numero.substring(1) }`)
            : setNumero(`-${ numero }`) 
    }

    const handleOperation = ( operation: Operations ) => {
        //handleLaunchOperation( operationRef.current )
        operationRef.current = operation
        setNumeroAnterior(numero)
        setNumero('')
    }

    const handleLaunchOperation = () => {
        let result: number = 0
        const [num1, num2] = [Number(numeroAnterior), Number(numero)] 
        switch( operationRef.current ){
            case '+':
                    result = num1 + num2
                break;
            case '-':
                    result = num1 - num2
                break;
            case '*':
                    result = num1 * num2
                break;
            case '/':
                    result = num1 / num2
                break;
        }
        if(!!operationRef.current){
            operationRef.current = undefined
            setNumero( Number.isNaN(result) ? '0' : result.toString())
            setNumeroAnterior('')
        }
    }

    const handleDelete = () => {
        const numberWithoutSign = numero.replace('-', '')
        const charactersNumber = numberWithoutSign.length
        if( charactersNumber > 1 ) setNumero(`${ numero.substring(0, numero.length - 1) }`)
        else if( charactersNumber === 1 && numberWithoutSign !== '0') setNumero('0')
    }

    return {
        numero,
        numeroAnterior,
        handleClean,
        handleDigit,
        handleAssignSign,
        handleOperation,
        handleLaunchOperation,
        handleDelete
    }
}
