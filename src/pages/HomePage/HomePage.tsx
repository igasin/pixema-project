import { Loader, LoaderMoreFilms, MovieList } from 'components';
import { useEffect } from 'react';
import { fetchMovies, useAppDispatch, useAppSelector } from 'store';
import { fetchNextPageMovies, nextMoviePage } from 'store/features';
import { getMovies } from 'store/selectors';
import { StyledBox, StyledButton } from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading, movies, error, page, theme,
  } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({ theme }));
  }, [dispatch, theme]);

  const handleMovies = () => {
    dispatch(nextMoviePage(true));
    dispatch(fetchNextPageMovies({ page, theme }));
  };

  return (
    <StyledBox>
      {isLoading && <Loader />}

      {error && <span>{error}</span>}

      {movies?.length > 0 && <MovieList movies={movies} />}

      {!isLoading && !error && (
        <StyledButton onClick={handleMovies}>
          Show More
          {isLoading && <LoaderMoreFilms />}
        </StyledButton>
      )}
    </StyledBox>
  );
};
