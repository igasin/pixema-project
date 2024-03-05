const randomTrends = ['Woman', 'Man', 'Time', 'Life', 'World', 'Dark'];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[(Math.random() * randomTrends.length) | 0];
  return randomTrend;
};
