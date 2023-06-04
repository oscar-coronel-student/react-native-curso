import ImageColors from 'react-native-image-colors'
import { api } from '../config/api'
import { Colors } from '../context/GradientContext';
import { Movie } from '../interfaces/TheMovieDb';

export const getImageUrl = (path: string) => {
    const { imgPathname } = api.themoviedb
    return `${ imgPathname }${ path }`
}

export const getMovieColors = async (movie: Movie) => {
    const imgUrl = getImageUrl( movie.poster_path )
    const colors = await getImageColors(imgUrl)
    return colors
}

export const getImageColors = async (uri: string): Promise<Colors> => {
    const result = await ImageColors.getColors(uri, {
        fallback: '#1c92db',
        cache: true,
        key: uri,
        quality: 'high'
    })

    const [ primary, secondary ] = result.platform === 'android' 
        ? [result.vibrant as string, result.lightVibrant as string]
        : result.platform === 'ios'
        ? [result.primary, result.secondary] : ['transparent', 'transparent']
    return {
        primary,
        secondary
    }
} 