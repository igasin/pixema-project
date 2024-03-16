import { SlideMovie, SlidePoster, Title } from './styles';
import { SlideProps } from './Slide.interface';

export const Slide = ({ movie }: SlideProps) => {
  const { title, poster, imdbID } = movie;
  return (
    <SlideMovie to={`/details/${imdbID}`}>
      <SlidePoster src={poster} />
      <Title>{title}</Title>
    </SlideMovie>
  );
};
