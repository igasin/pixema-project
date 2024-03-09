const randomTrends = ['X-Men', 'America', 'Home', 'Horror', 'Time', 'Moon', 'Light', 'Science', 'Space'];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[(Math.random() * randomTrends.length) | 0];
  return randomTrend;
};
