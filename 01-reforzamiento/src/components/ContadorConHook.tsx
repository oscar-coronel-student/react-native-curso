import { useCounter } from '../hooks/useCounter';


export const ContadorConHook = () => {

    const [number, handleAdd] = useCounter(3)

    return <>
        <h3>Contador Con Hook: <small>{ number }</small></h3>

        <button
            className='btn btn-primary btn-sm me-1'
            onClick={ () => handleAdd(-1) }
        >
            -1
        </button>

        <button
            className='btn btn-primary btn-sm'
            onClick={ () => handleAdd(1) }
        >
            +1
        </button>

    </>
}
