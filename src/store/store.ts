import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/MovieSlice/MovieSlice';
import filterReducer from './features/FilterSlice/FilterSlice';
import trendsReducer from './features/TrendsSlice/TrendsSlice';
import detailsReducer from './features/MovieDetailsSlice/MovieDetailsSlice';
import userReducer from './features/UserSlice/UserSlice';
import themeReducer from './features/ThemeSlice/ThemeSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
    trends: trendsReducer,
    details: detailsReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
