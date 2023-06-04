import { createContext, useReducer } from "react"
import { signInAction, changeFavIconAction, signOutAction, setUsername } from '../actions/auth';
import { AuthReducer } from "../reducers/AuthReducer"

// Definir qué información tendré en el context
export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

// Estado inicial
export const AuthInitialState: AuthState = {
    isLoggedIn: false
}

// lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void,
    signOut: () => void,
    changeFavIcon: (iconName: string) => void,
    changeUsername: (username: string) => void,
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps )

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState)

    const signIn = () => {
        dispatch(signInAction())
    }
    
    const signOut = () => {
        dispatch(signOutAction())
    }

    const changeFavIcon = (iconName: string) => {
        dispatch(changeFavIconAction(iconName))
    }

    const changeUsername = (username: string) => {
        dispatch(setUsername(username))
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut,
            changeFavIcon,
            changeUsername
        }} >
            { children }
        </AuthContext.Provider>
    )
}