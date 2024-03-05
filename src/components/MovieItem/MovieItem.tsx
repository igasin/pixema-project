import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { Movie } from 'types';
import { ImageNotFount } from 'assets';
import {
  MovieBox, MovieCard, MoviePoster, PosterWrap, TitleMovie,
} from './styles';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie: { title, poster, imdbID } }: MovieItemProps) => (
  <Link to={generatePath(ROUTE.Movie_details, { imdbID })}>
    <MovieBox>
      <MovieCard>
        <PosterWrap>
          {poster === 'N/A' ? <MoviePoster src={ImageNotFount} /> : <MoviePoster src={poster} />}
        </PosterWrap>
        <TitleMovie>{title}</TitleMovie>
      </MovieCard>
    </MovieBox>
  </Link>
);
