import { MovieList } from 'components';
import React, { useEffect } from 'react';
import { fetchMovies, useAppDispatch, useAppSelector } from 'store';
import { getMovies } from 'store/selectors';
import { StyledBox } from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  return (
    <StyledBox>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies?.length > 0 && <MovieList movies={movies} />}
    </StyledBox>
  );
};
