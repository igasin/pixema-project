import { Movie, MovieApi } from "../types/types";

export const transformMoviesApi = (movies: MovieApi[]): Movie[] => {
  return movies.map(({ Poster, Title, Type, Year, imdbID }) => {
    return {
      poster: Poster,
      title: Title,
      type: Type,
      year: Year,
      imdbID: imdbID,
    };
  });
};
