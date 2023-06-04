import { useState } from "react"

type UseCounter = [number, Function]

export const useCounter = ( initialNumber: number = 0 ): UseCounter => {

    const [number, setNumber] = useState<number>(initialNumber)

    const handleAdd = (value: number): void => {
        setNumber(number + value)
    }

    return [
        number,
        handleAdd
    ]
}