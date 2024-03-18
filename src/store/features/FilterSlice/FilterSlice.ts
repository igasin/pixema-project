import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL, OMDB_API_KEY } from 'constants/constants';
import { transformMoviesApi } from 'mappers';
import { Movie } from 'types';
import { Option } from 'types/types';

interface SortedMovies {
  y: string;
  s: string;
  type: Option | string;
  page: number;
}

interface FilterState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null | undefined;
  parameters: SortedMovies;
}

const initialState: FilterState = {
  movies: JSON.parse(localStorage.getItem('movies') || '[]'),
  isLoading: false,
  error: null,
  parameters: {
    s: '',
    y: '',
    type: '',
    page: 1,
  },
};

export const fetchMoviesByParameter = createAsyncThunk<
Movie[],
SortedMovies,
{ rejectValue: string }
>('filterMovies/fetchByParameter', async (parameters, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?apikey=${OMDB_API_KEY}&page=${parameters.page}`
        + `&s=${parameters.s}&y=${parameters.y}&type=${parameters.type}`,
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

    wipeOutMovies(state) {
      state.movies = [];
    },
    deleteMoviesParameters(state) {
      state.parameters = {
        s: '',
        type: '',
        y: '',
        page: 1,
      };
    },
    showNextPage(state, { payload }: PayloadAction<boolean>) {
      if (payload) {
        state.parameters.page += 1;
      } else {
        state.parameters.page = 1;
      }
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
      localStorage.setItem('movies', JSON.stringify(state.movies));
    });
    builder.addCase(fetchMoviesByParameter.rejected, (state, { payload }) => {
      if (payload) state.isLoading = false;
      state.error = payload;
    });
  },
});

export const {
  setMovieTitle,
  setMovieYear,
  setMovieType,
  deleteMoviesParameters,
  wipeOutMovies,
  showNextPage,
} = filterSlice.actions;

export default filterSlice.reducer;
