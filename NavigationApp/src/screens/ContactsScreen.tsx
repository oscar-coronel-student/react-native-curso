import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {
    console.log('contacts screen')

    const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>ContactsScreen</Text>
            {
                !isLoggedIn &&
                <Button 
                    title='Login'
                    onPress={ signIn }
                />
            }
        </View>
    )
}