import React from 'react';
import { Movie } from 'types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { StyledTrends } from './styles';

interface TrendsProps {
  movies: Movie[];
}

export const TrendList = ({ movies }: TrendsProps) => (
  <StyledTrends>
    {movies.map((movie) => <MovieItem movie={movie} key={movie.imdbID} isTrend />)}
  </StyledTrends>
);
