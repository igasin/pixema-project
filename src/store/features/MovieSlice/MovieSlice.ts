import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMoviesApi } from 'mappers';
import { getRandomMovie } from 'services';

import { Movie } from 'types';

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMovie>;
}

export const fetchMovies = createAsyncThunk<Movie[], { theme: string }, { rejectValue: string }>(
  'movies/fetchMovies',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://www.omdbapi.com/?s=${theme}&apikey=d50b311e&`);

      const transformedMovies = transformMoviesApi(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchNextPageMovies = createAsyncThunk<
Movie[],
{ theme: string; page: number },
{ rejectValue: string }
>('movies/fetchNextPageMovies', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${params.theme}&apikey=d50b311e&page=${params.page + 1}`,
    );

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
  page: 1,
  theme: getRandomMovie(),
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    nextMoviePage(state, { payload }) {
      payload ? (state.page += 1) : (state.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });

    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextPageMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextPageMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextPageMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export const { nextMoviePage } = moviesSlice.actions;

export default moviesSlice.reducer;

// // http://www.omdbapi.com/?apikey=[yourkey]&
// // apikey=d50b311e
