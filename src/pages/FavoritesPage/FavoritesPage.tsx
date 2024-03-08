import { FavoriteList } from 'components';
import React from 'react';
import { useAppSelector } from 'store';
import { getFavorites } from 'store/selectors';
import { NotFoundMovie } from 'assets';
import { ROUTE } from 'router';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  EmptyText, NotFoundBox, StyledFavorites, StyledImg,
} from './styles';
import { auth } from '../../firebase';

export const FavoritesPage = () => {
  // const { isAuth } = useAppSelector(getUserInfo);
  const { favorites } = useAppSelector(getFavorites);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? (
    <StyledFavorites>
      {favorites?.length > 0 ? (
        <FavoriteList />
      ) : (
        <NotFoundBox>
          <StyledImg src={NotFoundMovie} />
          <EmptyText>Your list of favorite movies is empty</EmptyText>
        </NotFoundBox>
      )}
    </StyledFavorites>
  ) : (
    <Navigate to={ROUTE.Sign_in} />
  );
};
