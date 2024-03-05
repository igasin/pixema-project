import { MovieDetails } from 'components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesDetails } from 'store/features';
import { getDetailsMovie, getMovies } from 'store/selectors';
import { MovieDetailsWrap } from './styles';

export const MovieDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { movieDetails, isLoading, error } = useAppSelector(getDetailsMovie);
  const { imdbID = '' } = useParams();

  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID));
  }, [dispatch, imdbID]);

  const { movies, theme } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({ theme }));
  }, [dispatch, theme]);

  return (
    <MovieDetailsWrap>
      {isLoading && <div>isload....</div>}
      {error && <span>{error}</span>}

      {movieDetails && <MovieDetails details={movieDetails} movies={movies} />}
    </MovieDetailsWrap>
  );
};
