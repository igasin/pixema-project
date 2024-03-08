import {
  Loader, LoaderMoreFilms, MovieList, NotFoundMessage,
} from 'components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesByParameter, showNextPage } from 'store/features';
import { getMoviesByFilters } from 'store/selectors';
import { StyledBoxSearch, StyledButton } from './styles';

export const SearchPage = () => {
  const dispatch = useAppDispatch();

  const {
    isLoading, parameters, movies, error,
  } = useAppSelector(getMoviesByFilters);

  useEffect(() => {
    if (parameters.s || parameters.y || parameters.type) dispatch(fetchMoviesByParameter(parameters));
  }, [dispatch, parameters]);

  const handleSearch = () => {
    dispatch(showNextPage(true));
  };

  return (
    <div>
      <StyledBoxSearch>
        {isLoading && <Loader />}

        {error && <NotFoundMessage />}

        {movies?.length > 0 && <MovieList movies={movies} />}

        {!isLoading && !error && (
          <StyledButton onClick={handleSearch}>
            Show More
            {isLoading && <LoaderMoreFilms />}
          </StyledButton>
        )}
      </StyledBoxSearch>
    </div>
  );
};
