import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Movie } from '../../../types';

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
>('movies/fetchMovies', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'https://www.omdbapi.com/?apikey=d50b311e&s=stars&type=movie&y=2023&page=1',
    );
    const transformedMovies = data.Search.map((movie) => ({
      title: movie.Title,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    }));
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

// http://www.omdbapi.com/?apikey=[yourkey]&
// apikey=d50b311e
