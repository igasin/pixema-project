const randomMovies = [
  'Batman',
  'Love',
  'Wars',
  'Marvel',
  'Oscar',
  'Man',
  'Mother',
  'City',
  'Adventure',
  'Life',
];

const getRandomMovie = (randomMovies: string[]) => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};

export const randomMovieTrends = getRandomMovie(randomMovies);
