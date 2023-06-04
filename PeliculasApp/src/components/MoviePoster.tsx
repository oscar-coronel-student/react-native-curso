import { NavigationProp, useNavigation } from '@react-navigation/native'
import { memo } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Movie } from '../interfaces/TheMovieDb'
import { getImageUrl } from '../utils/utils'
import { RootStackProps } from '../navigations/StackNavigator';


interface Props {
    movie: Movie
    imgHeight: number
    imgWidth: number
}

export const MoviePoster = memo(( { movie, imgHeight, imgWidth }: Props ) => {

    const navigation: NavigationProp<RootStackProps> = useNavigation();

    const uri = getImageUrl(movie.poster_path)

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate('DetailScreen', { movie }) }
        >
            <View style={{
                height: imgHeight,
                width: imgWidth,
                alignSelf: 'center',
                marginBottom: 20
            }}>
                <View style={ styles.imgContent }>
                    <Image 
                        source={{ uri }}
                        style={[ styles.image]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    imgContent: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
})