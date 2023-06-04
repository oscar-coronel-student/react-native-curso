export const api = {
    themoviedb: {
        baseURL: 'https://api.themoviedb.org/3/movie',
        imgPathname: 'https://image.tmdb.org/t/p/w500',
        endpoints: {
            getNowPlaying: '/now_playing',
            getPopular: '/popular',
            getTopRated: '/top_rated',
            getUpcoming: '/upcoming',
            getCredits: '/credits'
        }
    }
}