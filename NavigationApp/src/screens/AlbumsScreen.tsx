import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {
    console.log('albums screen')

    const { signOut, authState: { isLoggedIn } } = useContext(AuthContext)

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>AlbumsScreen</Text>
            {
                isLoggedIn &&
                <Button 
                    title='Logout'
                    onPress={ signOut }
                />
            }
        </View>
    )
}