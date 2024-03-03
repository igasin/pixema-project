import { MovieList } from 'components';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesByParameter } from 'store/features';
import { getMoviesByFilters } from 'store/selectors';
import { StyledBoxSearch } from './styles';

export const SearchPage = () => {
  const dispatch = useAppDispatch();

  const {
    isLoading, parameters, movies, error,
  } = useAppSelector(getMoviesByFilters);

  useEffect(() => {
    if (parameters.s || parameters.y || parameters.type) dispatch(fetchMoviesByParameter(parameters));
  }, [dispatch, parameters]);

  return (
    <div>
      <StyledBoxSearch>
        {isLoading && <div>isload....</div>}

        {error && <span>{error}</span>}

        {movies?.length > 0 && <MovieList movies={movies} />}
      </StyledBoxSearch>
    </div>
  );
};
