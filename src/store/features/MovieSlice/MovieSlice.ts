import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMoviesApi } from 'mappers';
import { Movie } from 'types';

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk<
Movie[],
{ page: number },
{ rejectValue: string }
>('movies/fetchMovies', async ({ page }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'http://www.omdbapi.com/?s=mad&apikey=d50b311e',
    );

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.movies = payload;
    });

    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;

// // http://www.omdbapi.com/?apikey=[yourkey]&
// // apikey=d50b311e
