import { RequareAuth } from 'components';
import {
  FavoritesPage,
  HomePage,
  MovieDetailsPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  TrendsPage,
} from 'pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { MainTemplate } from 'templates/MainTemplate';
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.Home} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.Search} element={<SearchPage />} />
      <Route path={ROUTE.Sign_in} element={<SignInPage />} />
      <Route path={ROUTE.Settings} element={<SettingsPage />} />
      <Route path={ROUTE.Trends} element={<TrendsPage />} />
      <Route path={ROUTE.Movie_details} element={<MovieDetailsPage />} />
      <Route element={<RequareAuth />}>
        <Route path={ROUTE.Favorites} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
