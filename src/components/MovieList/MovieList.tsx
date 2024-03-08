import { memo } from 'react';
import { Movie } from 'types';
import { MovieItem } from 'components';

import { StyledMovieList } from './styles';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = memo(({ movies }: MovieListProps) => (
  <StyledMovieList>
    {movies.map((movie) => <MovieItem movie={movie} key={movie.imdbID} />)}
  </StyledMovieList>
));
