const randomMovies = ['Batman', 'Wars', 'Marvel', 'Man', 'Adventure', 'Life', 'World', 'Dark', 'Sherlock'];

export const getRandomMovie = () => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};
