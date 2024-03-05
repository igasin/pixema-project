import { FavoriteList } from 'components';
import React from 'react';
import { useAppSelector } from 'store';
import { getFavorites, getUserInfo } from 'store/selectors';
import { NotFoundMovie } from 'assets';
import { ROUTE } from 'router';
import { Navigate } from 'react-router-dom';
import {
  EmptyText, NotFoundBox, StyledFavorites, StyledImg,
} from './styles';

export const FavoritesPage = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  const { favorites } = useAppSelector(getFavorites);

  return isAuth ? (
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
