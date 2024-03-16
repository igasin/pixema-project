import { Movie } from 'types';

export interface MovieItemProps {
  movie: Movie;
  isTrend?: boolean;
  isFavorite?: boolean;
}
