import React, { useState } from 'react';
import { MovieDetailsInfo } from 'types';

import { DeleteFavoriteIcon, FavoriteIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'store';
import { getDetailsMovie, getMovies, getUserInfo } from 'store/selectors';
import { addFavorites, deleteFavorites } from 'store/features';
import { SimpleSlider } from 'components/SimpleSlider/SimpleSlider';
import { useToggle } from 'hooks';
import { FavoriteModal, Loader } from 'components';
import { ROUTE } from 'router';
import { useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  ContainerMovie,
  DeleteButton,
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
  Reccomends,
  RunTime,
  SliderContainer,
  Title,
  TitleMovie,
  Wrap,
} from './styles';

interface DetailsProps {
  details: MovieDetailsInfo;
}

export const MovieDetails = ({ details }: DetailsProps) => {
  const dispatch = useAppDispatch();
  const { movieDetails, isLoading } = useAppSelector(getDetailsMovie);
  const [buttonColor, setButtonColor] = useState('#323537');
  const [isOpen, setToggle] = useToggle(false);
  const { isAuth } = useAppSelector(getUserInfo);
  const navigate = useNavigate();

  const handleFavorite = (): void => {
    isAuth ? dispatch(addFavorites(movieDetails)) : navigate(ROUTE.Sign_in);
    setButtonColor('#7b61ff');
    setToggle();
  };

  const handleDeleteFavorite = (): void => {
    dispatch(deleteFavorites(movieDetails.imdbID));
  };

  const { movies } = useAppSelector(getMovies);

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
    <Wrap>
      {isLoading && <Loader />}
      <ContainerMovie>
        <PosterContainer>
          <PosterWrap>
            <MoviePoster src={poster} />
          </PosterWrap>

          <ButtonContainer>
            <FavoriteButton
              type="button"
              onClick={handleFavorite}
              style={{ backgroundColor: buttonColor }}
            >
              <FavoriteIcon />
            </FavoriteButton>

            <DeleteButton type="button" onClick={handleDeleteFavorite}>
              <DeleteFavoriteIcon width={30} />
            </DeleteButton>
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
            {year !== 'N/A' && (
              <InfoMovie>
                <Title>Year</Title>
                <Description>{year}</Description>
              </InfoMovie>
            )}

            {released !== 'N/A' && (
              <InfoMovie>
                <Title>Realised</Title>
                <Description>{released}</Description>
              </InfoMovie>
            )}

            {boxOffice !== 'N/A' && (
              <InfoMovie>
                <Title>BoxOffice</Title>
                <Description>{boxOffice}</Description>
              </InfoMovie>
            )}

            {country !== 'N/A' && (
              <InfoMovie>
                <Title>Country</Title>
                <Description>{country}</Description>
              </InfoMovie>
            )}

            {production !== 'N/A' && (
              <InfoMovie>
                <Title>Production</Title>
                <Description>{production}</Description>
              </InfoMovie>
            )}

            {actors !== 'N/A' && (
              <InfoMovie>
                <Title>Actors</Title>
                <Description>{actors}</Description>
              </InfoMovie>
            )}

            {director !== 'N/A' && (
              <InfoMovie>
                <Title>Director</Title>
                <Description>{director}</Description>
              </InfoMovie>
            )}

            {writer !== 'N/A' && (
              <InfoMovie>
                <Title>Writers</Title>
                <Description>{writer}</Description>
              </InfoMovie>
            )}
          </MovieDescription>
        </DetailsWrap>
      </ContainerMovie>
      <SliderContainer>
        <Reccomends>Recommendations</Reccomends>
        <SimpleSlider movies={movies} />
      </SliderContainer>
      <FavoriteModal toggleModal={setToggle} isOpen={isOpen} />
    </Wrap>
  );
};
