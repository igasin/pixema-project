import React, { useEffect } from 'react';
// import { ROUTE } from '../../router/routes';
import { fetchMovies } from '../../store/features';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies && movies?.length > 0 && (
        <ul>
          {movies.map((movie) => <li key={movie.imdbID}>{movie.title}</li>)}
        </ul>
      )}
    </div>
  );
};