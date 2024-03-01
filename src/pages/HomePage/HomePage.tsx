import React, { useEffect } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../store/features';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { StyledBox } from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  return (
    <StyledBox>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies?.length > 0 && (
        <ul>
          {movies.map((movie) => <li key={movie.imdbID}>{movie.title}</li>)}
        </ul>
      )}
    </StyledBox>
  );
};
