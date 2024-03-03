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

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AuthTemplate } from 'templates/AuthTemplate/AuthTemplate';
import { MainTemplate } from 'templates/MainTemplate';
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.Home} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.Search} element={<SearchPage />} />

        <Route path={ROUTE.Settings} element={<SettingsPage />} />
        <Route path={ROUTE.Trends} element={<TrendsPage />} />
        <Route
          path={ROUTE.Movie_details}
          element={<MovieDetailsPage />}
        />
      </Route>
      <Route path={ROUTE.AUTH} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
      <Route path={ROUTE.Favorites} element={<FavoritesPage />} />
    </>,
  ),
);
