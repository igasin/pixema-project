import {
  FavoritesPage,
  HomePage,
  MovieDetailsPage,
  ResetPasswordPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from 'pages';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthTemplate } from 'templates/AuthTemplate/AuthTemplate';
import { MainTemplate } from 'templates/MainTemplate';
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.Home} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.Search} element={<SearchPage />} />
        <Route path={ROUTE.Favorites} element={<FavoritesPage />} />
        <Route path={ROUTE.Settings} element={<SettingsPage />} />
        <Route path={ROUTE.Trends} element={<TrendsPage />} />
        <Route path={ROUTE.Movie_details} element={<MovieDetailsPage />} />
      </Route>

      <Route path={ROUTE.Auth} element={<AuthTemplate />}>
        <Route path={ROUTE.Sign_in} element={<SignInPage />} />
        <Route path={ROUTE.Sign_up} element={<SignUpPage />} />
        <Route path={ROUTE.Reset_password} element={<ResetPasswordPage />} />
      </Route>
    </>,
  ),
  { basename: '/pixema-project/' },
);
