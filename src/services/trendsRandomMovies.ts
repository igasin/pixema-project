const randomTrends = [
  'X-Men',
  'America',
  'Home',
  'Beach',
  'Sea',
  'Moon',
  'Light',
  'Science',
  'Space',
];

export const getRandomMovieTrend = () => {
  const randomTrend = randomTrends[Math.floor(Math.random() * randomTrends.length)];
  return randomTrend;
};
