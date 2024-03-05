import { LoaderMoreFilms, MovieList } from 'components';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesTrends, fetchNextPageTrends, nextTrendsPage } from 'store/features';
import { getMoviesTrends } from 'store/selectors';
import { StyledButton, StyledTrends } from './styles';

export const TrendsPage = () => {
  const dispatch = useAppDispatch();

  const handleTrends = () => {
    dispatch(nextTrendsPage(true));
    dispatch(fetchNextPageTrends({ page: 2 }));
  };

  const { trends, isLoading, error } = useAppSelector(getMoviesTrends);

  useEffect(() => {
    dispatch(fetchMoviesTrends({ page: 1 }));
  }, [dispatch]);

  return (
    <StyledTrends>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {trends?.length > 0 && <MovieList movies={trends} />}

      <StyledButton onClick={handleTrends}>
        Show More
        {isLoading && <LoaderMoreFilms />}
      </StyledButton>
    </StyledTrends>
  );
};
