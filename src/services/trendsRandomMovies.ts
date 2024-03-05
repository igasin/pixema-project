const randomTrends = ['Woman', 'Man', 'Time', 'Life', 'World'];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[(Math.random() * randomTrends.length) | 0];
  return randomTrend;
};
