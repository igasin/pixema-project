const randomMovies = ['Mars', 'Wars', 'Mad', 'Time', 'World', 'Dark', 'Stars', 'Space', 'Woman', 'Game'];

export const getRandomMovie = () => {
  const randomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)];
  return randomMovie;
};
