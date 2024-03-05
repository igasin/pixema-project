const randomMovies = [
  'Batman',
  'Wars',
  'Dream',
  'Marvel',
  'Man',
  'Adventure',
  'Life',
  'Potter',
  'Hobbit',
  'World',
  'Dark',
];

export const getRandomMovie = () => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};
