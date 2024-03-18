import {
  fetchMovies,
  nextMoviePage,
  fetchNextPageMovies,
} from './MovieSlice/MovieSlice';
import {
  fetchMoviesByParameter,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
  deleteMoviesParameters,
  showNextPage,
} from './FilterSlice/FilterSlice';
import {
  fetchMoviesTrends,
  fetchNextPageTrends,
  nextTrendsPage,
} from './TrendsSlice/TrendsSlice';
import { fetchMoviesDetails } from './MovieDetailsSlice/MovieDetailsSlice';
import {
  fetchSignInUser,
  fetchResetPassword,
  fetchUpdateEmail,
  fetchUpdatePassword,
  fetchSignOut,
  setAuth,
  unsetAuth,
  fetchUpdateUserName,
} from './UserSlice/UserSlice';
import { toggleMode } from './ThemeSlice/ThemeSlice';
import { addFavorites, deleteFavorites } from './FavoriteSlice/FavoriteSlice';

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
  fetchResetPassword,
  fetchUpdateEmail,
  fetchUpdatePassword,
  fetchSignOut,
  deleteFavorites,
  showNextPage,
  setAuth,
  unsetAuth,
  fetchUpdateUserName,
};
