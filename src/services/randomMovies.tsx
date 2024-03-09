const randomMovies = ['Mars', 'Wars', 'Mad', 'Time', 'World', 'Dark', 'Stars', 'Space', 'Woman', 'Game'];

export const getRandomMovie = () => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};
