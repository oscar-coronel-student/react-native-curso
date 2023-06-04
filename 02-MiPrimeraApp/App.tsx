import React from 'react'
import { SafeAreaView } from 'react-native'

//import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
//import { CounterScreen } from './src/screens/CounterScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { DimensionesScreen } from './src/screens/DimensionesScreen'
//import { PositionScreen } from './src/screens/PositionScreen'
//import { FlexScreen } from './src/screens/FlexScreen'
//import { TareaScreen } from './src/screens/TareaScreen'
import { StreamScreen } from './src/screens/StreamScreen'

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StreamScreen />
    </SafeAreaView>
  )
}
