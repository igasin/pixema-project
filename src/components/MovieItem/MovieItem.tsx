import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { Movie } from 'types';
import {
  MovieBox, MovieCard, MoviePoster, TitleMovie,
} from './styles';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => (
  <Link to={generatePath(ROUTE.Movie_details, { imdbID: movie.imdbID })}>
    <MovieBox>
      <MovieCard>
        <MoviePoster src={movie.poster} />
        <TitleMovie>
          {movie.title}
          {' '}
          {movie.year}
        </TitleMovie>
      </MovieCard>
    </MovieBox>
  </Link>
);
