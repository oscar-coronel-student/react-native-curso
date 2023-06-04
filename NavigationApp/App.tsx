import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { DrawerNavigator } from './src/navigator/DrawerNavigator'
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/*<StackNavigator />*/}
        <DrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}