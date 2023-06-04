import { useReducer } from 'react'

interface AuthState {
    validando: boolean
    token: string|null
    username: string|null
    nombre: string|null
}

type AuthAction = 
    | { type: 'logout', payload?: AuthState } 
    | { type: 'login', payload: AuthState }

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {

    const { type, payload } = action

    switch( type ){
        case 'login':
            return {
                ...payload,
                validando: false
            }

        case 'logout':
            return {
                ...initialState,
                validando: false
            }

        default:
            return { ...state }
    }
}


export const Login = () => {

    const [loginState, dispatch] = useReducer(authReducer, initialState)

    const { validando, token, nombre } = loginState


    const handleLogin = () => {
        const action: AuthAction = { 
            type: 'login',
            payload: {
                token: 'asdfnaiwriwerpmz',
                username: 'ocoronel',
                nombre: 'Daniel Oscar',
                validando: false 
            }
        }

        dispatch( action )
    }

    const handleLogout = () => {
        const action: AuthAction = { 
            type: 'logout'
        }

        dispatch( action )
    }

    return <>
    
        <h3>Login</h3>

        {
            !!validando &&
            <div className="alert alert-info">
                Validando...
            </div>
        }

        {
            !validando && (
                !token 
                    ? <div className="alert alert-danger">No autenticado</div> 
                    : <div className="alert alert-success">Autenticado como <strong>{ nombre }</strong></div>
            )
        }

        {
            (!!token)
                ?   <button 
                        className="btn btn-danger"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                :
                    <button 
                        className="btn btn-primary"
                        onClick={ handleLogin }
                    >
                        Login
                    </button>
        }

    </>
}