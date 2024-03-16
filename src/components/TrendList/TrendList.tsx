import { memo } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { TrendsProps } from './TrendList.interface';
import { StyledTrends } from './styles';

export const TrendList = memo(({ movies }: TrendsProps) => (
  <StyledTrends>
    {movies.map((movie) => (
      <MovieItem movie={movie} key={movie.imdbID} isTrend />
    ))}
  </StyledTrends>
));
