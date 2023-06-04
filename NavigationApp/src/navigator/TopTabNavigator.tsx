import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { AlbumsScreen } from '../screens/AlbumsScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'
import { colors } from '../theme/appTheme';


const Tab = createMaterialTopTabNavigator()

type TabBarIconProps = {
    focused: boolean;
    color: string;
    routeName: string;
}

const TabBarIcons = ( {color, routeName}: TabBarIconProps ) => {
    let iconName: string = ''
    switch(routeName){
        case 'ChatScreen':
                iconName = 'comments'
            break;
        case 'ContactsScreen':
                iconName = 'address-book'
            break;
        case 'AlbumsScreen':
                iconName = 'images'
            break;
    }
    return (
        <Text>
            <Icon name={ iconName } size={ 20 } color={ colors.primary } />
        </Text>
    )
}

export const TopTabNavigator = () => {
    const { top } = useSafeAreaInsets()
    return (
        <Tab.Navigator
            style={{ marginTop: top }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            //tabBarPosition='bottom'
            screenOptions={ ({ route }) => {
                return ({
                    tabBarActiveTintColor: colors.primary,
                    tabBarPressColor: colors.primary,
                    tabBarShowIcon: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.primary
                    },
                    //tabBarIndicator: () => null, // Quitar el indicator
                    tabBarStyle: {
                        borderBottomColor: 'transparent',
                        shadowColor: 'transparent',
                        borderBottomWidth: 0,
                        elevation: 0,
                    },
                    tabBarIcon: (iconProps) => {
                        return <TabBarIcons routeName={ route.name } { ...iconProps } />
                    }
                })
            }}
        >
            <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
        </Tab.Navigator>
    )
}