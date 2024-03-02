import { Movie, MovieResponse } from 'types';

export const transformMoviesApi = (response: MovieResponse): Movie[] => response.Search.map(({
  Title, Year, imdbID, Type, Poster,
}) => ({
  title: Title,
  year: Year,
  imdbID,
  type: Type,
  poster: Poster,
}));
