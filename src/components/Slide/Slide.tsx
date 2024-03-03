import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { Movie } from 'types';
import { SlideMovie, SlidePoster, Title } from './styles';

interface SlideProps {
  movie: Movie;
}

export const Slide = ({ movie }: SlideProps) => (
  <SlideMovie to={generatePath(ROUTE.Home, { imdbID: movie.imdbID })}>
    <SlidePoster src={movie.poster} />
    <Title>{movie.title}</Title>
    {' '}
  </SlideMovie>
);
