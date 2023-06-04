import { useState, useEffect } from 'react';
import { movieDB } from '../api/movieDB'
import { api } from '../config/api';

import { Cast, GetCredits } from '../interfaces/GetCredits';
import { GetDetails } from "../interfaces/GetDetails"
import { Movie } from '../interfaces/TheMovieDb'


interface UseMovieDetails {
    cast: Cast[]
    isLoading: boolean
    movieDetail: GetDetails|null
}

const initMovieDetails: UseMovieDetails = {
    cast: [],
    isLoading: true,
    movieDetail: null
}

const { endpoints } = api.themoviedb

export const useMovieDetails = (movie: Movie): UseMovieDetails => {

    const [movieDetails, setMovieDetails] = useState<UseMovieDetails>(initMovieDetails);

    const getMovieDetails = async () => {
        const getDetailPromise = movieDB.get<GetDetails>(`/${ movie.id }`);
        const getCastPromise = movieDB.get<GetCredits>(`/${ movie.id }${ endpoints.getCredits }`);

        const allResponse = await Promise.all([
            getDetailPromise,
            getCastPromise
        ])

        setMovieDetails({
            ...movieDetails,
            movieDetail: allResponse[0].data,
            cast: allResponse[1].data.cast,
            isLoading: false,
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...movieDetails
    }
}