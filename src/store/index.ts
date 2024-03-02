import { store } from './store';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

import { fetchMovies } from './features/MovieSlice/MovieSlice';

export {
  store, useAppSelector, useAppDispatch, fetchMovies,
};
