import { Movie } from "./TheMovieDb";

export interface NowPlaying {
    dates: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}