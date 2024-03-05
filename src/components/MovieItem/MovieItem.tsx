import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  <Link to={`/details/${imdbID}`}>
    <MovieBox>
      <MovieCard whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1 }}>
        <PosterWrap>
          {poster === 'N/A' ? <MoviePoster src={ImageNotFount} /> : <MoviePoster src={poster} />}
        </PosterWrap>
        <TitleMovie>{title}</TitleMovie>
      </MovieCard>
    </MovieBox>
  </Link>
);
