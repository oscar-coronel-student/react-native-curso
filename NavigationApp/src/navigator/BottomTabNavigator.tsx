import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform, Text } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Tab1Screen } from '../screens/Tab1Screen'
import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'
import { TopTabNavigator } from "./TopTabNavigator"

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
    routeName: string;
}

const BottomTabIOS = createBottomTabNavigator()
const BottomTabAndroid = createMaterialBottomTabNavigator()
const BottomTab = Platform.OS === 'android' ? BottomTabAndroid : BottomTabIOS


const TabBarIcons = ( {color, routeName}: TabBarIconProps ) => {
    let iconName: string = ''
    switch(routeName){
        case 'Tab1Screen':
                iconName = 'yin-yang'
            break;
        case 'TopTabNavigator':
                iconName = 'newspaper'
            break;
        case 'StackNavigator':
                iconName = 'medal'
            break;
    }
    return (
        <Text>
            <Icon name={ iconName } size={ 15 } color='white' />
        </Text>
    )
}

const BottomTabByPlatform = ({children}: any) => {
    return Platform.OS === 'android' ? (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={ true }
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={({ route }) => {
                return ({
                    tabBarIcon: (iconProps: any) => {
                        return <TabBarIcons routeName={ route.name } { ...iconProps } />
                    },
                })
            }}
        >
            { children }
        </BottomTabAndroid.Navigator>
    ) : (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => {
                return ({
                    tabBarActiveTintColor: colors.primary,
                    tabBarStyle: {
                        borderTopColor: 'transparent',
                        shadowColor: 'transparent',
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarIcon: (iconProps) => {
                        return <TabBarIcons routeName={ route.name } { ...iconProps } />
                    },
                    tabBarLabelStyle: {
                        fontSize: 16
                    },
                })
            }}
        >
            { children }
        </BottomTabIOS.Navigator>
    )
}

export const BottomTabNavigator = () => {
    return (
        <BottomTabByPlatform>
            {/* <BottomTab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
            <BottomTab.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
            <BottomTab.Screen name="TopTabNavigator" options={{ title: 'TopTab' }} component={ TopTabNavigator } />
            <BottomTab.Screen name="StackNavigator" options={{headerShown: false, title: 'Stack'}} component={ StackNavigator } />
        </BottomTabByPlatform>
    )
}