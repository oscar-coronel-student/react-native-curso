import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigations/StackNavigator'
import { GradientProvider } from './src/providers/GradientProvider';


export const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <StackNavigator />
      </GradientProvider>
    </NavigationContainer>
  )
}