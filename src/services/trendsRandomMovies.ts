const randomTrends = ['X-Men', 'America', 'Home', 'Horror', 'Time', 'Moon', 'Light', 'Science', 'Space'];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[Math.floor(Math.random() * randomTrends.length)];
  return randomTrend;
};
