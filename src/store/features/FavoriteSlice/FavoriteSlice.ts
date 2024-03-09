import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieDetailsInfo } from 'types';

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, { payload }: PayloadAction<MovieDetailsInfo>) {
      const isAdded = state.favorites.find(
        (movie) => movie.imdbID === payload.imdbID,
      );
      if (!isAdded) state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    deleteFavorites(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== payload,
        localStorage.setItem('favorites', JSON.stringify(state.favorites)),
      );
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
