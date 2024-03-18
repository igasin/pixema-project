import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL, OMDB_API_KEY } from 'constants/constants';
import { transformMoviesApi } from 'mappers';
import { getRandomMovieTrend } from 'services';
import { Movie } from 'types';

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMovieTrend>;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  error: null,
  page: 1,
  theme: getRandomMovieTrend(),
};

export const fetchMoviesTrends = createAsyncThunk<Movie[], { theme: string }, { rejectValue: string }>(
  'trends/fetchMoviesTrends',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}?s=${theme}&apikey=${OMDB_API_KEY}&page=1`);

      const transformedMovies = transformMoviesApi(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchNextPageTrends = createAsyncThunk<Movie[], { page: number; theme: string }, { rejectValue: string }>(
  'trends/fetchNextPageTrends',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}?s=${params.theme}&apikey=${OMDB_API_KEY}&page=${params.page + 1}`,
      );

      const transformedMovies = transformMoviesApi(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {
    nextTrendsPage(state, { payload }) {
      if (payload) {
        state.page += 1;
      } else {
        state.page = 1;
      }
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
