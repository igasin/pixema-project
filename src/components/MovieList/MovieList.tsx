import React from "react";
import { Movie } from "../../types";
import { MovieItem } from "../MovieItem/MovieItem";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
};
