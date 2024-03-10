import { useAppSelector } from 'store';
import { getFavorites } from 'store/selectors';
import { MovieItem } from 'components';
import { StyledList } from './styles';

export const FavoriteList = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <StyledList>
      {favorites.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} isFavorite />
      ))}
    </StyledList>
  );
};
