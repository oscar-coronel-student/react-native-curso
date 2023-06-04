import { View, Text, FlatList, Dimensions } from 'react-native'

import { Movie } from '../interfaces/TheMovieDb'
import { MoviePoster } from './MoviePoster'


const { width, height } = Dimensions.get('window')

interface Props {
    title?: string
    movies: Movie[]
    preItemKey: string
}

export const HorizontalSlider = ({ movies, preItemKey, title }: Props) => {
    
    return (
        <>
            <View
                style={{
                    width,
                }}
            >
                {
                    title &&
                        <Text style={{ marginLeft: 10, fontSize: 30, fontWeight: 'bold' }}>
                            { title }
                        </Text>
                }
                <FlatList
                    data={movies}
                    keyExtractor={(item) => `${ preItemKey }${ item.id }`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                            <MoviePoster
                                movie={item}
                                imgHeight={height * 0.28}
                                imgWidth={width * 0.38}
                            />
                        </View>
                    )
                    }
                />
            </View>
        </>
    )
}