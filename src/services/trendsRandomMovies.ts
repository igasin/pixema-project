const randomTrends = ['Woman', 'Man', 'Time', 'Life', 'World', 'Dark', 'Detective'];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[(Math.random() * randomTrends.length) | 0];
  return randomTrend;
};
