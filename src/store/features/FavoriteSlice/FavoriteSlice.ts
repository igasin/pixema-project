import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieDetailsInfo } from 'types';

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, { payload }: PayloadAction<Movie>) => {
      state.favorites.push(payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites } = favoritesSlice.actions;
