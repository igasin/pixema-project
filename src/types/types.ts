interface MovieApi {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface Movie {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}
interface MovieResponse {
  Search: MovieApi[];
  totalResults: number;
  Response: boolean;
}

interface ResponseData {
  search: MovieApi[];
  totalResults: number;
  response: boolean;
}

export interface Option {
  readonly value: OptionType;
  readonly label: string;
}

export type OptionType = "movie" | "series" | "episode";

interface MovieDetailsApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieDetailsInfo {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

interface RatingApi {
  Source: string;
  Value: string;
}

export type {
  MovieApi,
  Movie,
  MovieResponse,
  ResponseData,
  MovieDetailsApi,
  MovieDetailsInfo,
};
