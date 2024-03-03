import { fetchMovies } from './MovieSlice/MovieSlice';
import {
  fetchMoviesByParameter, setMovieTitle, setMovieType, setMovieYear,
} from './FilterSlice/FilterSlice';
import { fetchMoviesTrends } from './TrendsSlice/TrendsSlice';

import { fetchMoviesDetails } from './MovieDetailsSlice/MovieDetailsSlice';

export {
  fetchMovies,
  fetchMoviesByParameter,
  fetchMoviesDetails,
  fetchMoviesTrends,
  setMovieTitle,
  setMovieType,
  setMovieYear,
};
