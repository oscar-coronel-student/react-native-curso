import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { AuthContext } from '../context/AuthContext'
import { colors, styles } from '../theme/appTheme'

export const SettingsScreen = () => {
    console.log('render settings screen')

    const insets = useSafeAreaInsets()

    const { authState } = useContext(AuthContext)
    const { favoriteIcon } = authState

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>SettingsScreen</Text>
            <Text>{ JSON.stringify(authState, null, 3) }</Text>
            {
                !!favoriteIcon &&
                <Icon name={ favoriteIcon } size={ 150 } color={ colors.primary } />
            }
        </View>
    )
}