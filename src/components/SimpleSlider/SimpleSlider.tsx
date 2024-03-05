import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from 'components';
import { Movie } from 'types';
import { useWindowSize } from 'hooks';
import { Slick, SlideContainer } from './styles';

interface SliderProps {
  movies: Movie[];
}

export const SimpleSlider = ({ movies }: SliderProps) => {
  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
    margin: 10,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SlideContainer>
      <Slick>
        <Slider {...settings}>
          {movies.map((movie) => <Slide movie={movie} key={movie.imdbID} />)}
        </Slider>
      </Slick>
    </SlideContainer>
  );
};
