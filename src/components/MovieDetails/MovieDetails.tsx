import { Slider } from 'components';
import React from 'react';
import { MovieDetailsInfo } from 'types';

import {
  ButtonFavorite,
  ContainerMovie,
  Description,
  DetailsWrap,
  GenreTitle,
  InfoMovie,
  MovieDescription,
  MoviePlot,
  MoviePoster,
  PosterWrap,
  Rating,
  RatingBox,
  RatingImdb,
  RunTime,
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
      <PosterWrap>
        <MoviePoster src={poster} />
        <ButtonFavorite />
      </PosterWrap>

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
      <SliderWrapper>
        <SliderTitleWrapper>
          <SliderTittle>Recommendations</SliderTittle>
        </SliderTitleWrapper>
        <Slider />
      </SliderWrapper>
    </ContainerMovie>
  );
};
