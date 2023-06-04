import { AuthInitialState, AuthState } from "../context/AuthContext"

export type Action = 
    | { type: 'singIn' }
    | { type: 'singOut' }
    | { type: 'setUsername', payload: string }
    | { type: 'selectFavoriteIcon', payload: string }

export const AuthReducer = (state: AuthState, action: Action): AuthState => {
    const { type } = action

    switch(type){
        case 'singIn':
            return {
                ...state,
                 isLoggedIn: true,
                 username: 'Oscar Coronel',
            }
        case 'singOut': 
            return {
                ...AuthInitialState
            }
        case 'selectFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}
