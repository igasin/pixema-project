import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BookMarkIcon, FireIcon, ImageNotFount } from 'assets';
import { Colors } from 'ui';
import {
  FavoriteLabel, MovieBox, MovieCard, MoviePoster, PosterWrap, TitleMovie, TrendsLabel,
} from './styles';
import { MovieItemProps } from './MovieItem.interface';

export const MovieItem = memo(({ isFavorite, isTrend, movie: { title, poster, imdbID } }: MovieItemProps) => (
  <Link to={`/details/${imdbID}`}>
    <MovieBox>
      <MovieCard whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1 }}>
        {isTrend && (
        <TrendsLabel>
          <FireIcon />
        </TrendsLabel>
        )}
        {isFavorite && (
        <FavoriteLabel>
          <BookMarkIcon fill={Colors.PRIMARY} />
        </FavoriteLabel>
        )}

        <PosterWrap>
          {poster === 'N/A' ? <MoviePoster src={ImageNotFount} /> : <MoviePoster src={poster} />}
        </PosterWrap>
        <TitleMovie>{title}</TitleMovie>
      </MovieCard>
    </MovieBox>
  </Link>
));
