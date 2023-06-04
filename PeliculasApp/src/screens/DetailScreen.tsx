import { Image, ScrollView, StyleSheet, View, Dimensions, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackProps } from '../navigations/StackNavigator';
import { getImageUrl } from '../utils/utils';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetail } from '../components/MovieDetail';
import { BackButton } from '../components/BackButton';


interface Props extends StackScreenProps<RootStackProps, 'DetailScreen'> {}

const { height } = Dimensions.get('window')

export const DetailScreen = ({ route }: Props) => {
    console.log('DETAIL SCREEN')

    const { movie } = route.params
    const uri = getImageUrl(movie.poster_path)

    const { movieDetail, cast, isLoading } = useMovieDetails(movie)

    console.log(isLoading)

    return (
        <ScrollView>
            <View style={[ styles.content ]}>
                <BackButton />
                <View style={[ styles.imgContent ]}>
                    <Image
                        source={{ uri }}
                        style={[ styles.img ]}
                    />
                </View>
                <View style={[ styles.textContent ]}>
                    <Text style={[ styles.subtitle ]}>{ movie.original_title }</Text>
                    <Text style={[ styles.title ]}>{ movie.title }</Text>
                </View>
                {
                    isLoading 
                    ? <>
                        <ActivityIndicator 
                            color='grey'
                            size={ 35 }
                            style={{ marginTop: 20 }}
                        />
                    </>
                    : <MovieDetail movieDetail={ movieDetail! } cast={ cast } />
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgContent: {
        backgroundColor: 'white',
        height: height * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    img: {
        flex: 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    textContent: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    }
})