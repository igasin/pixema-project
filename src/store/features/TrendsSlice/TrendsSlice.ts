import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMoviesApi } from 'mappers';
import { Movie } from 'types';

interface TrendsState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TrendsState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchMoviesTrends = createAsyncThunk<
Movie[],
{ page: number },
{ rejectValue: string }
>('trends/fetchMoviesTrends', async ({ page }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'https://www.omdbapi.com/?s=wars&apikey=d50b311e&page=1',
    );

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.movies = payload;
    });

    builder.addCase(fetchMoviesTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
