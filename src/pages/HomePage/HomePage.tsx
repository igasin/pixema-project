import { MovieList } from 'components';
import React, { useEffect, useState } from 'react';
import { fetchMovies, useAppDispatch, useAppSelector } from 'store';
import { StyledBox } from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  console.log(movies);

  return (
    <StyledBox>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies?.length > 0 && <MovieList movies={movies} />}
    </StyledBox>
  );
};
