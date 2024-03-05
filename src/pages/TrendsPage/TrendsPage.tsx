import { LoaderMoreFilms, TrendList } from 'components';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchMoviesTrends, fetchNextPageTrends, nextTrendsPage } from 'store/features';
import { getMoviesTrends } from 'store/selectors';
import { StyledButton, StyledTrends } from './styles';

export const TrendsPage = () => {
  const dispatch = useAppDispatch();
  const {
    trends, isLoading, error, theme, page,
  } = useAppSelector(getMoviesTrends);

  const handleTrends = () => {
    dispatch(nextTrendsPage(true));
    dispatch(fetchNextPageTrends({ page, theme }));
  };

  useEffect(() => {
    dispatch(fetchMoviesTrends({ theme }));
  }, [dispatch, theme]);

  return (
    <StyledTrends>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {trends?.length > 0 && <TrendList movies={trends} />}

      {!isLoading && !error && (
        <StyledButton onClick={handleTrends}>
          Show More
          {isLoading && <LoaderMoreFilms />}
        </StyledButton>
      )}
    </StyledTrends>
  );
};
