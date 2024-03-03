import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/bundle';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Slide } from 'components';
import { useAppSelector } from 'store';
import { getMovies } from 'store/selectors';
import { SlideContainer } from './styles';

export const Slider = () => {
  const { movies } = useAppSelector(getMovies);
  return (
    <SlideContainer>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => 'slide change'}
        onSwiper={(swiper) => swiper}
      >
        <SlideContainer>
          {movies.map((movie) => (
            <SwiperSlide>
              <Slide movie={movie} key={movie.imdbID} />
            </SwiperSlide>
          ))}
        </SlideContainer>
      </Swiper>
    </SlideContainer>
  );
};
