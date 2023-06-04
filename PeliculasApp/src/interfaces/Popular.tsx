import { Movie } from "./TheMovieDb";

export interface Popular {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}