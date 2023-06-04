import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { styles, colors } from '../theme/appTheme';
import { SettingsScreen } from '../screens/SettingsScreen'
import { BottomTabNavigator } from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerContent = ( { state, navigation, descriptors }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView
            style={ styles.drawerContent }
        >
            {/* Avatar */}
            <View style={ styles.avatarContent }>
                <Image 
                    source={{
                        uri: 'https://sparenatafranca.com/static/images/user.png'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones del menú */}
            <View style={ styles.drawerItemsContent }>
                {
                    state.routes.map( drawerItem => {
                        let iconName: string = ''
                        switch (drawerItem.name) {
                            case 'BottomTabNavigator':
                                iconName = 'map'
                                break;
                            case 'SettingsScreen':
                                iconName = 'cog'
                                break;
                        }

                        return (
                            <TouchableOpacity key={ drawerItem.key }
                                onPress={ () => navigation.navigate(drawerItem.name) }
                                style={ styles.drawerItemButton }
                                activeOpacity={ 0.8 }
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginRight: 10 }}>
                                        <Icon name={ iconName } size={ 16 } color={ colors.primary } />
                                    </Text>
                                    <Text style={ styles.drawerItemText }>{ descriptors[drawerItem.key]['options']['title'] }</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </DrawerContentScrollView>
    )
}

export const DrawerNavigator = () => {
    const { width } = useWindowDimensions()
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                drawerType: width > 750 ? 'permanent' : 'front',
            }}
            drawerContent={ DrawerContent }
        >
            <Drawer.Screen name="BottomTabNavigator" options={{ title: 'Navegación' }} component={BottomTabNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Ajustes' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}