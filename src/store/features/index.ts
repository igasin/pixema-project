import { fetchMovies, nextMoviePage, fetchNextPageMovies } from './MovieSlice/MovieSlice';
import {
  fetchMoviesByParameter, setMovieTitle, setMovieType, setMovieYear, wipeOutMovies, deleteMoviesParameters,
} from './FilterSlice/FilterSlice';
import { fetchMoviesTrends, fetchNextPageTrends, nextTrendsPage } from './TrendsSlice/TrendsSlice';
import { fetchMoviesDetails } from './MovieDetailsSlice/MovieDetailsSlice';
import { fetchSignInUser } from './UserSlice/UserSlice';
import { toggleMode } from './ThemeSlice/ThemeSlice';
import { addFavorites } from './FavoriteSlice/FavoriteSlice';

export {
  fetchMovies,
  fetchMoviesByParameter,
  fetchMoviesDetails,
  fetchMoviesTrends,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  nextMoviePage,
  fetchNextPageMovies,
  wipeOutMovies,
  deleteMoviesParameters,
  fetchSignInUser,
  toggleMode,
  fetchNextPageTrends,
  nextTrendsPage,
  addFavorites,
};
