import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { styles, colors } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {
    console.log('render page 1')

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity activeOpacity={ 0.7 } style={{ marginRight: 15 }}
                        onPress={ () => navigation.toggleDrawer() }
                    >
                        <Text>
                            <Icon name='bars' size={ 25 } color={ colors.primary } />
                        </Text>
                    </TouchableOpacity>
                )
            }
        })
    }, [])

    return (
        <View
            style={ styles.globalMargin }
        >
            <Text style={ styles.title }>Pagina 1 Screen</Text>
            <Button
                title='Ir a la página 2'
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text style={{ marginTop: 20 }}>Navegar con argumentos</Text>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 30
                }}
            >
                <TouchableOpacity
                    activeOpacity={ 0.8 }
                    style={ [styles.bigButton, { backgroundColor: 'brown' }] }
                    onPress={ () => navigation.navigate('PersonaScreen', 
                        {
                            id: 1,
                            name: 'Pedro'
                        }
                    )}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 10 }}>
                            <Icon name='user-graduate' size={ 13 } color='white' />
                        </Text>
                        <Text style={ styles.bigButtonText }>Pedro</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={ 0.8 }
                    style={ [styles.bigButton, { backgroundColor: 'green' }] }
                    onPress={ () => navigation.navigate('PersonaScreen', 
                        {
                            id: 2,
                            name: 'Juan'
                        }
                    )}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 10 }}>
                            <Icon name='skiing-nordic' size={ 13 } color='white' />
                        </Text>
                        <Text style={ styles.bigButtonText }>Juan</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}