import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMoviesApi } from 'mappers';
import { Movie } from 'types';

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  error: null,
  page: 1,
};

export const fetchMoviesTrends = createAsyncThunk<
Movie[],
{ page: number },
{ rejectValue: string }
>('trends/fetchMoviesTrends', async ({ page }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('https://www.omdbapi.com/?s=stars&apikey=d50b311e&page=1');

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

export const fetchNextPageTrends = createAsyncThunk<
Movie[],
{ page: number },
{ rejectValue: string }
>('trends/fetchNextPageTrends', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=stars&apikey=d50b311e&page=${params.page + 1}`,
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
  reducers: {
    nextTrendsPage(state, { payload }) {
      payload ? (state.page += 1) : (state.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoviesTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });

    builder.addCase(fetchMoviesTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextPageTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextPageTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = [...state.trends, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextPageTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { nextTrendsPage } = trendsSlice.actions;

export default trendsSlice.reducer;
