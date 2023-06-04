import { StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext';
import { useContext, useEffect } from 'react';
import { useFade } from '../hooks/useFade';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const GradientBox = ({children}: Props) => {
    const { colors, previousColors, setPreviousColors } = useContext(GradientContext)

    const { opacity, fade } = useFade(0)

    useEffect(() => {
        fade('fadeIn', () => {
            setPreviousColors(colors)
            fade('fadeOut')
        })
    }, [colors])

    return (
        <>
            <LinearGradient 
                colors={[ previousColors.primary, previousColors.secondary, 'white']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.1, y: 0.55 }}
                style={{ ...StyleSheet.absoluteFillObject }}
            />
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient 
                    colors={[ colors.primary, colors.secondary, 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.1, y: 0.55 }}
                    style={{ ...StyleSheet.absoluteFillObject }}
                />
            </Animated.View>
            { children }
        </>
    )
}