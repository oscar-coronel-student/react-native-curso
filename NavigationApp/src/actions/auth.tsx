import { Action } from "../reducers/AuthReducer";

export const signInAction = (): Action => ({
    type: 'singIn',
})

export const signOutAction = (): Action => ({
    type: 'singOut',
})

export const changeFavIconAction = (iconName: string): Action => ({
    type: 'selectFavoriteIcon',
    payload: iconName
})

export const setUsername = (username: string): Action => ({
    type: 'setUsername',
    payload: username
})