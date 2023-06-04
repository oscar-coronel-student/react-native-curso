import { createDrawerNavigator } from '@react-navigation/drawer'

import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'

import { useWindowDimensions, View } from 'react-native';


const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                drawerType: width > 750 ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen 
                name="StackNavigator" 
                component={StackNavigator} 
                options={{
                    title: 'Home'
                }}
            />
            <Drawer.Screen 
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{
                    title: 'Configuraciones'
                }}
            />
        </Drawer.Navigator>
    )
}