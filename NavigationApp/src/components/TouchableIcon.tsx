import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface Props {
    name: string 
}

export const TouchableIcon = ( { name }: Props ) => {

    const { changeFavIcon } = useContext(AuthContext)

    const handleSelectIcon = () => {
        changeFavIcon(name)
    }

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ handleSelectIcon }
        >
            <Icon name={ name } size={70} color={ colors.primary } />
        </TouchableOpacity>
    )
}
