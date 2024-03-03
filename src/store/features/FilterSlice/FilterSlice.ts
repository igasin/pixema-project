import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMoviesApi } from 'mappers';
import { Movie } from 'types';
import { Option } from 'types/types';

interface SortedMovies {
  y: string;
  s: string;
  type: Option | string;
}

interface FilterState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  parameters: SortedMovies;
}

const initialState: FilterState = {
  movies: [],
  isLoading: false,
  error: null,
  parameters: { s: '', y: '', type: '' },
};

export const fetchMoviesByParameter = createAsyncThunk<
Movie[],
SortedMovies,
{ rejectValue: string }
>('filterMovies/fetchByParameter', async (parameters, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=d50b311e&s=${parameters.s}&y=${parameters.y}`,
    );

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const filterSlice = createSlice({
  name: 'filterMovies',
  initialState,
  reducers: {
    setMovieTitle: (state, { payload }: PayloadAction<string>) => {
      state.parameters.s = payload;
    },

    setMovieYear: (state, { payload }: PayloadAction<string>) => {
      state.parameters.y = payload;
    },

    setMovieType: (state, { payload }: PayloadAction<Option>) => {
      state.parameters.type = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchMoviesByParameter.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesByParameter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies.push(...payload);
    });
    builder.addCase(fetchMoviesByParameter.rejected, (state, { payload }) => {
      if (payload) state.isLoading = false;
      // state.error = payload;
    });
  },
});

export const { setMovieTitle, setMovieYear, setMovieType } = filterSlice.actions;

export default filterSlice.reducer;
