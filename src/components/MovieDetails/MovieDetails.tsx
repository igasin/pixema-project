import { Slider } from 'components';
import React from 'react';
import { MovieDetailsInfo } from 'types';

import { FavoriteIcon, ShareIcon } from 'assets';
import { Colors } from 'ui';
import { useAppDispatch, useAppSelector } from 'store';
import { getFavorites } from 'store/selectors';
import { addFavorites } from 'store/features';
import {
  ButtonContainer,
  ContainerMovie,
  Description,
  DetailsWrap,
  FavoriteButton,
  GenreTitle,
  InfoMovie,
  MovieDescription,
  MoviePlot,
  MoviePoster,
  PosterContainer,
  PosterWrap,
  Rating,
  RatingBox,
  RatingImdb,
  RunTime,
  ShareButton,
  SliderTitleWrapper,
  SliderTittle,
  SliderWrapper,
  Title,
  TitleMovie,
} from './styles';

interface DetailsProps {
  details: MovieDetailsInfo;
}

export const MovieDetails = ({ details }: DetailsProps) => {
  const { favorites } = useAppSelector(getFavorites);
  const dispatch = useAppDispatch;

  const handleFavorite = () => {
    dispatch();
  };

  const {
    poster,
    title,
    year,
    released,
    runtime,
    plot,
    writer,
    actors,
    country,
    imdbRating,
    genre,
    boxOffice,
    director,
    production,
  } = details;
  return (
    <ContainerMovie>
      <PosterContainer>
        <PosterWrap>
          <MoviePoster src={poster} />
        </PosterWrap>
        <ButtonContainer>
          <FavoriteButton type="button" onClick={handleFavorite}>
            <FavoriteIcon />
          </FavoriteButton>

          <ShareButton>
            <ShareIcon />
          </ShareButton>
        </ButtonContainer>
      </PosterContainer>
      <DetailsWrap>
        <GenreTitle>{genre}</GenreTitle>
        <TitleMovie>{title}</TitleMovie>
        <RatingBox>
          <Rating>{imdbRating}</Rating>
          <RatingImdb>
            Imdb
            {imdbRating}
          </RatingImdb>
          <RunTime>{runtime}</RunTime>
        </RatingBox>

        <MoviePlot>{plot}</MoviePlot>

        <MovieDescription>
          <InfoMovie>
            <Title>Year</Title>
            <Description>{year}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Realised</Title>
            <Description>{released}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>BoxOffice</Title>
            <Description>{boxOffice}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Country</Title>
            <Description>{country}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Production</Title>
            <Description>{production}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Actors</Title>
            <Description>{actors}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Director</Title>
            <Description>{director}</Description>
          </InfoMovie>
          <InfoMovie>
            <Title>Writers</Title>
            <Description>{writer}</Description>
          </InfoMovie>
        </MovieDescription>
      </DetailsWrap>
      //add slider
    </ContainerMovie>
  );
};
