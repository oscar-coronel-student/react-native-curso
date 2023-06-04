import { useEffect, useState, useContext } from 'react';

import { movieDB } from '../api/movieDB'
import { api } from '../config/api'
import { Movie } from '../interfaces/TheMovieDb'
import {  getMovieColors } from '../utils/utils';
import { GradientContext } from '../context/GradientContext';


interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}
type MoviesProp = { results: Movie[] }
interface UseMovies extends MoviesState {
    isLoading: boolean
    getPosterColorsByIndex: (index: number) => Promise<void>
}

const initMoviesState: MoviesState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
} 

const { getNowPlaying, getPopular, getTopRated, getUpcoming } = api.themoviedb.endpoints

export const useMovies = <T extends MoviesProp>(): UseMovies => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<MoviesState>(initMoviesState)
    const { setColors } = useContext(GradientContext)

    const { nowPlaying } = movies

    const getMovies = async () => {
        setIsLoading(true)

        const nowPlayingPromise = movieDB.get<T>(getNowPlaying)
        const popularPromise = movieDB.get<T>(getPopular)
        const topRatedPromise = movieDB.get<T>(getTopRated)
        const upcomingPromise = movieDB.get<T>(getUpcoming)

        const allResponse = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ])

        const [
            nowPlayingResponse,
            popularResponse,
            topRatedResponse,
            upcomingResponse,
        ] = allResponse

        setMovies({
            nowPlaying: nowPlayingResponse.data.results,
            popular: popularResponse.data.results,
            topRated: topRatedResponse.data.results,
            upcoming: upcomingResponse.data.results
        })

        setIsLoading(false)
    }

    const getPosterColorsByIndex = async (index: number) => {
        const currentMovie = movies.nowPlaying[index]
        const colors = await getMovieColors(currentMovie)
        setColors(colors);
    }

    useEffect(() => {
        nowPlaying.length > 0 && getPosterColorsByIndex(0)
    }, [nowPlaying])

    useEffect(() => {
        getMovies()
    }, [])
    
    return {
        ...movies,
        isLoading,
        getPosterColorsByIndex
    }
}