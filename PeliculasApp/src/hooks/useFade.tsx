import { useRef } from 'react';
import { Animated } from 'react-native';


type FadeType = 'fadeIn'|'fadeOut'
type InitialValue = 0|1

export const useFade = ( initialValue: InitialValue = 0 ) => {

    const opacity = useRef( new Animated.Value(initialValue) ).current;

    const fade = (fadeType: FadeType, finishCallback?: () => void) => {
        Animated.timing(
            opacity,
            {
                toValue: fadeType === 'fadeIn' ? 1 : 0,
                useNativeDriver: true,
                delay: 500
            }
        ).start( finishCallback )
    }

    return{
        opacity,
        fade
    }
}