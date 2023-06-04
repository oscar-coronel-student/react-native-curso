import React from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    GestureResponderEvent, 
    TouchableNativeFeedback, 
    Platform,
    TouchableOpacity 
} from 'react-native';


interface Props {
    text: string
    position?: 'right'|'left'
    onPress: (event: GestureResponderEvent) => void
}

export const Fab = ({ onPress, text, position = 'right' }: Props) => {

    const positionClass: Object = position === 'right' ? styles.fab_main_right : 
                                  position === 'left' ? styles.fab_main_left : {}

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ onPress }
                style={[styles.fab_main, positionClass]}
            >
                <View style={styles.fab} >
                    <Text style={styles.fab_text}>{ text }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[styles.fab_main, positionClass]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#4141a3', false, 30) }
                >
                    <View style={styles.fab} >
                        <Text style={styles.fab_text}>{ text }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'android' ? android() : ios()
}

const styles = StyleSheet.create({
    fab_main: {
        position: 'absolute',
        bottom: 20,
    },
    fab_main_right: {
        right: 20
    },
    fab_main_left: {
        left: 20
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    fab_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }
})