import { MovieDetails } from 'components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesDetails } from 'store/features';
import { getDetailsMovie } from 'store/selectors';
import { MovieDetailsWrap } from './styles';

export const MovieDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading, error } = useAppSelector(getDetailsMovie);
  const { imdbID = '' } = useParams();

  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <MovieDetailsWrap>
      {isLoading && <div>isload....</div>}
      {error && <span>{error}</span>}

      {details && <MovieDetails details={details} />}
    </MovieDetailsWrap>
  );
};
