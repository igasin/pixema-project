import { MovieList } from 'components';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesTrends } from 'store/features';
import { getMoviesTrends } from 'store/selectors';
import { StyledTrends } from './styles';

export const TrendsPage = () => {
  const dispatch = useAppDispatch();

  const { trends, isLoading, error } = useAppSelector(getMoviesTrends);

  useEffect(() => {
    dispatch(fetchMoviesTrends({ page: 1 }));
  }, [dispatch]);

  return (
    <StyledTrends>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {trends?.length > 0 && <MovieList movies={trends} />}
    </StyledTrends>
  );
};
