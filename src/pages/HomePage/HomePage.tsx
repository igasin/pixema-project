import { MovieList } from 'components';
import React, { useEffect } from 'react';
import { fetchMovies, useAppDispatch, useAppSelector } from 'store';
import { fetchNextPageMovies, nextMoviePage } from 'store/features';
import { getMovies } from 'store/selectors';
import { StyledBox, StyledButton } from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading, movies, error, page,
  } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  const handleMovies = () => {
    dispatch(nextMoviePage(true));
    dispatch(fetchNextPageMovies({ page }));
  };

  return (
    <StyledBox>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies?.length > 0 && <MovieList movies={movies} />}

      <StyledButton onClick={handleMovies}>Button</StyledButton>
    </StyledBox>
  );
};
