import { Movie } from "./TheMovieDb";

export interface TopRated {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}