import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from 'components';
import { SliderProps } from './SimpleSlider.interface';
import { Slick, SlideContainer } from './styles';

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
