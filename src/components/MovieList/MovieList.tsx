import { memo } from 'react';
import { MovieItem } from 'components';
import { MovieListProps } from './MovieList.interface';
import { StyledMovieList } from './styles';

export const MovieList = memo(({ movies }: MovieListProps) => (
  <StyledMovieList>
    {movies.map((movie) => (
      <MovieItem movie={movie} key={movie.imdbID} />
    ))}
  </StyledMovieList>
));
