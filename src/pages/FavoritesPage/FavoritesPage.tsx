import { FavoriteList } from 'components';
import React from 'react';
import { useAppSelector } from 'store';
import { getFavorites } from 'store/selectors';
import { NotFoundMovie } from 'assets';
import {
  EmptyText, NotFoundBox, StyledFavorites, StyledImg,
} from './styles';

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
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
  );
};
