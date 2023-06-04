import { useState } from "react"




export const Contador = () => {

    const [number, setNumber] = useState(0)

    const handleSum = (value: number) => {
        setNumber(number + value)
    }

    return <>
        <h3>Contador: <small>{ number }</small></h3>

        <button
            className='btn btn-primary btn-sm me-1'
            onClick={ () => handleSum(-1) }
        >
            -1
        </button>

        <button
            className='btn btn-primary btn-sm'
            onClick={ () => handleSum(1) }
        >
            +1
        </button>

    </>
}
