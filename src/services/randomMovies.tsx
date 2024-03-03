import axios from 'axios';

const randomMovies = [
  'Mars',
  'Space',
  'Wars',
  'Marvel',
  'Oscar',
  'Man',
  'Love',
  'Car',
  'Life',
  'City',
];

const getRandomMovie = (randomMovies: string[]) => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};

export const randomMovieTrends = getRandomMovie(randomMovies);
