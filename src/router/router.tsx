import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RequareAuth } from '../components/RequareAuth/RequareAuth';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SettingsPage } from '../pages/SettingPage/SettingsPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { TrendsPage } from '../pages/TrendsPage/TrendsPage';
import { MainTemplate } from '../templates/MainTemplate';
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
