import { ActivityIndicator, Dimensions, StyleSheet, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack'
import Carousel from 'react-native-reanimated-carousel'

import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { HorizontalSlider } from '../components/HorizontalSlider'
import { GradientBox } from '../components/GradientBox';

interface Props extends StackScreenProps<any, any> { }


const { width, height } = Dimensions.get('window')

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const posterImgHeight = height * 0.5
  const posterImgWidth = width * 0.7
  const carouselWidth = width * 1

  const { 
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    getPosterColorsByIndex
  } = useMovies()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={30} />
      </View>
    )
  }

  return (
    <GradientBox>
      <ScrollView>
        <View style={[styles.container, { marginTop: top }]}>

          { /* CAROUSEL PRINCIPAL */}
          <View
            style={{
              width: carouselWidth,
              alignSelf: 'center',
            }}
          >
            <Carousel
              mode='parallax'
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: width * 0.35,
              }}
              width={carouselWidth}
              height={posterImgHeight}
              data={[...nowPlaying]}
              scrollAnimationDuration={1000}
              style={{ borderRadius: 18 }}
              onSnapToItem={(index) => getPosterColorsByIndex(index)}
              renderItem={({ index }) => (
                <MoviePoster
                  movie={nowPlaying[index]}
                  imgHeight={posterImgHeight}
                  imgWidth={posterImgWidth}
                />
              )}
            />
          </View>

          <HorizontalSlider movies={popular} preItemKey='home_popular_' title='Populares' />
          <HorizontalSlider movies={topRated} preItemKey='home_top_rated_' title='Top Rated' />
          <HorizontalSlider movies={upcoming} preItemKey='home_upcoming_' title='Upcoming' />

        </View>
      </ScrollView>
    </GradientBox>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})