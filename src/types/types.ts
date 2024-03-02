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

export type {
  MovieApi, Movie, MovieResponse, ResponseData,
};
