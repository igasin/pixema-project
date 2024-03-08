const randomMovies = ['Wars', 'Man', 'Adventure', 'Life', 'World', 'Dark', 'Potter', 'Water', 'Woman'];

export const getRandomMovie = () => {
  const randomMovie = randomMovies[(Math.random() * randomMovies.length) | 0];
  return randomMovie;
};
